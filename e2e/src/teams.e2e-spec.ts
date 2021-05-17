import { browser, by, ElementArrayFinder, logging } from 'protractor';
import { Team } from '../../src/app/models/team.model';
import { AppPage } from './utils/app.po';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';
import { TeamUtilsPageObject } from './utils/team-utils.po';

describe('Team builder teams section', () => {
	let page: AppPage;
	const createdTeam: Team = new Team(0, 'The grand slam', 'TGS');
	beforeEach(async () => {
		page = new AppPage();
		void browser.driver.manage().window().maximize();
		await page.navigateTo();
		await TeamUtilsPageObject.createTeam(page, createdTeam);
	});

	it('should display the team list when the teams tab is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		expect(
			await EndToEndTestUtils.isElementHasClass(
				page.getHeaderTeamsTabElement(),
				'active'
			)
		);
	});

	it('should display the selected team element with read only fields when the view button is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		expect(await page.getTeamElementViewButton(0).isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementViewButton(0)
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormIdField().isPresent()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isPresent()).toBe(true);
		expect(await page.getTeamElementFormShortNameField().isPresent()).toBe(
			true
		);
		expect(await page.getTeamElementFormIdField().isEnabled()).toBeFalsy();
		expect(
			await page.getTeamElementFormFullNameField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getTeamElementFormShortNameField().isEnabled()
		).toBeFalsy();
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormIdField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('The grand slam');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormShortNameField()
			)
		).toEqual('TGS');
	});

	it('should display the selected team element with open fields when the edit button is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementEditButton(0)
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormIdField().isPresent()).toBeFalsy();
		expect(await page.getTeamElementFormFullNameField().isPresent()).toBe(true);
		expect(await page.getTeamElementFormShortNameField().isPresent()).toBe(
			true
		);
		expect(await page.getTeamElementFormSubmitButton().isPresent()).toBe(true);
		expect(await page.getTeamElementFormSubmitButton().isEnabled()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isEnabled()).toBe(true);
		expect(await page.getTeamElementFormShortNameField().isEnabled()).toBe(
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('The grand slam');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormShortNameField()
			)
		).toEqual('TGS');
	});

	it('should display error text when the required fields are empty in edit mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementEditButton(0)
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormIdField().isPresent()).toBeFalsy();
		expect(await page.getTeamElementFormFullNameField().isPresent()).toBe(true);
		expect(await page.getTeamElementFormShortNameField().isPresent()).toBe(
			true
		);
		expect(await page.getTeamElementFormSubmitButton().isPresent()).toBe(true);
		expect(await page.getTeamElementFormSubmitButton().isEnabled()).toBe(true);
		expect(await page.getTeamElementFormCancelButton().isPresent()).toBe(true);
		expect(await page.getTeamElementFormCancelButton().isEnabled()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isEnabled()).toBe(true);
		expect(await page.getTeamElementFormShortNameField().isEnabled()).toBe(
			true
		);

		EndToEndTestUtils.clearInputTextElement(
			page.getTeamElementFormFullNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('');

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormFullNameRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getTeamElementFormFullNameRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getTeamElementFormShortNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormShortNameField()
			)
		).toEqual('');

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormShortNameRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getTeamElementFormShortNameRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		expect(await page.getTeamElementFormSubmitButton().isEnabled()).toBeFalsy();
		expect(
			await page.getTeamElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the team short name field length is greater than 6 in edit mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementEditButton(0)
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormShortNameField().isPresent()).toBe(
			true
		);
		expect(await page.getTeamElementFormShortNameField().isEnabled()).toBe(
			true
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'MORE_THAN_SIX_CHRARACTERS',
			page.getTeamElementFormShortNameField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormShortNameField()
			)
		).toEqual('MORE_THAN_SIX_CHRARACTERS');

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormShortNameMaxLengthErrorMessageBloc()
				.isPresent()
		).toBe(true);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getTeamElementFormShortNameMaxLengthErrorMessageBloc()
			)
		).toEqual('The length is greater than 6');

		expect(await page.getTeamElementFormSubmitButton().isEnabled()).toBeFalsy();
		expect(
			await page.getTeamElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should save the form values when the save button is clicked in edit mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementEditButton(0)
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isPresent()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isEnabled()).toBe(true);

		EndToEndTestUtils.inputTextInFieldElement(
			'1',
			page.getTeamElementFormFullNameField(),
			false
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('The grand slam1');

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page.getTeamElementFormSubmitButton().isEnabled()
		).toBeTruthy();

		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementFormSubmitButton()
		);

		expect(await page.getTeamListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementViewButton(0)
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isPresent()).toBe(true);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('The grand slam1');
	});

	it('should cancel the form values edition when the cancel button is clicked in edit mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementEditButton(0)
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isPresent()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isEnabled()).toBe(true);

		EndToEndTestUtils.inputTextInFieldElement(
			'1',
			page.getTeamElementFormFullNameField(),
			false
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('The grand slam1');

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page.getTeamElementFormCancelButton().isEnabled()
		).toBeTruthy();

		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementFormCancelButton()
		);

		expect(await page.getTeamListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementViewButton(0)
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isPresent()).toBe(true);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('The grand slam');
	});

	it('should create new team when the save button is clicked in create mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		expect(await page.getTeamElementCreateButton().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementCreateButton()
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isPresent()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isEnabled()).toBe(true);
		expect(await page.getTeamElementFormShortNameField().isPresent()).toBe(
			true
		);
		expect(await page.getTeamElementFormShortNameField().isEnabled()).toBe(
			true
		);

		const newTeamFullName = 'New best team';
		const newTeamShortName = 'NBT';
		EndToEndTestUtils.inputTextInFieldElement(
			newTeamFullName,
			page.getTeamElementFormFullNameField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual(newTeamFullName);

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			newTeamShortName,
			page.getTeamElementFormShortNameField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormShortNameField()
			)
		).toEqual(newTeamShortName);

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page.getTeamElementFormSubmitButton().isEnabled()
		).toBeTruthy();

		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementFormSubmitButton()
		);

		expect(await page.getTeamListElement().isPresent()).toBe(true);

		const teamElementList = page.getTeamListElement().all(by.css('li'));

		void teamElementList
			.count()
			.then(async (count: number) => {
				await EndToEndTestUtils.clickOnPageElement(
					page.getTeamElementViewButton(count)
				);
				expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
				expect(await page.getTeamElementFormFullNameField().isPresent()).toBe(
					true
				);
				expect(await page.getTeamElementFormShortNameField().isPresent()).toBe(
					true
				);

				expect(
					await EndToEndTestUtils.getElementValueAttribute(
						page.getTeamElementFormFullNameField()
					)
				).toEqual(newTeamFullName);

				expect(
					await EndToEndTestUtils.getElementValueAttribute(
						page.getTeamElementFormShortNameField()
					)
				).toEqual(newTeamShortName);
			})
			.catch((result) => {
				expect(result).toBeTruthy();
			});
	});

	it('should cancel the team creation when the cancel button is clicked in create mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementEditButton(0)
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isPresent()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isEnabled()).toBe(true);
		expect(await page.getTeamElementFormShortNameField().isPresent()).toBe(
			true
		);
		expect(await page.getTeamElementFormShortNameField().isEnabled()).toBe(
			true
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'test',
			page.getTeamElementFormFullNameField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('test');

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());
		expect(
			await page.getTeamElementFormCancelButton().isEnabled()
		).toBeTruthy();

		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementFormCancelButton()
		);
		expect(await page.getTeamListElement().isPresent()).toBe(true);
	});

	it('should display error text when the required fields are empty in create mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementCreateButton()
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormIdField().isPresent()).toBeFalsy();
		expect(await page.getTeamElementFormFullNameField().isPresent()).toBe(true);
		expect(await page.getTeamElementFormShortNameField().isPresent()).toBe(
			true
		);
		expect(await page.getTeamElementFormSubmitButton().isPresent()).toBe(true);
		expect(await page.getTeamElementFormSubmitButton().isEnabled()).toBe(false);
		expect(await page.getTeamElementFormCancelButton().isPresent()).toBe(true);
		expect(await page.getTeamElementFormCancelButton().isEnabled()).toBe(true);
		expect(await page.getTeamElementFormFullNameField().isEnabled()).toBe(true);
		expect(await page.getTeamElementFormShortNameField().isEnabled()).toBe(
			true
		);

		EndToEndTestUtils.clearInputTextElement(
			page.getTeamElementFormFullNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('');

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormFullNameRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getTeamElementFormFullNameRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getTeamElementFormShortNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormShortNameField()
			)
		).toEqual('');

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormShortNameRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getTeamElementFormShortNameRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		expect(await page.getTeamElementFormSubmitButton().isEnabled()).toBeFalsy();
		expect(
			await page.getTeamElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the team short name field length is greater than 6 in edit mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementCreateButton()
		);
		expect(await page.getTeamElementViewForm().isPresent()).toBe(true);
		expect(await page.getTeamElementFormShortNameField().isPresent()).toBe(
			true
		);
		expect(await page.getTeamElementFormShortNameField().isEnabled()).toBe(
			true
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'MORE_THAN_SIX_CHRARACTERS_AGAIN',
			page.getTeamElementFormShortNameField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormShortNameField()
			)
		).toEqual('MORE_THAN_SIX_CHRARACTERS_AGAIN');

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormShortNameMaxLengthErrorMessageBloc()
				.isPresent()
		).toBe(true);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getTeamElementFormShortNameMaxLengthErrorMessageBloc()
			)
		).toEqual('The length is greater than 6');

		expect(await page.getTeamElementFormSubmitButton().isEnabled()).toBeFalsy();
		expect(
			await page.getTeamElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should delete the selected team element when the delete button is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent()).toBe(true);
		const initialTeamElementList: ElementArrayFinder = page
			.getTeamListElement()
			.all(by.css('li'));

		const initialTeamElementListCount: number = await initialTeamElementList.count();
		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementDeleteButton(0)
		);
		const currentTeamElementList: ElementArrayFinder = page
			.getTeamListElement()
			.all(by.css('li'));

		const currentTeamElementListCount: number = await currentTeamElementList.count();
		expect(currentTeamElementListCount).toBeLessThan(
			initialTeamElementListCount
		);
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		void EndToEndTestUtils.clearLocalStorage();
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(
			jasmine.objectContaining({
				level: logging.Level.SEVERE
			} as logging.Entry)
		);
	});
});
