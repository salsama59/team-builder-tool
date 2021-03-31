import { browser, by, logging } from 'protractor';
import { AppPage } from './utils/app.po';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';

describe('Team builder teams section', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
		void browser.driver.manage().window().maximize();
	});

	it('should display the team list when the teams tab is clicked', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent());
		expect(
			await EndToEndTestUtils.isElementHasClass(
				page.getHeaderTeamsTabElement(),
				'active'
			)
		);
	});

	it('should display the selected team element with read only fields when the view button is clicked', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewButton(0));
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormIdField().isPresent());
		expect(await page.getTeamElementFormFullNameField().isPresent());
		expect(await page.getTeamElementFormShortNameField().isPresent());
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
		).toEqual('my first team');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormShortNameField()
			)
		).toEqual('MFT');
	});

	it('should display the selected team element with open fields when the edit button is clicked', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementEditButton(0));
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormIdField().isPresent()).toBeFalsy();
		expect(await page.getTeamElementFormFullNameField().isPresent());
		expect(await page.getTeamElementFormShortNameField().isPresent());
		expect(await page.getTeamElementFormSubmitButton().isPresent());
		expect(await page.getTeamElementFormSubmitButton().isEnabled());
		expect(await page.getTeamElementFormFullNameField().isEnabled());
		expect(await page.getTeamElementFormShortNameField().isEnabled());
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('my first team');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormShortNameField()
			)
		).toEqual('MFT');
	});

	it('should display error text when the required fields are empty in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementEditButton(0));
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormIdField().isPresent()).toBeFalsy();
		expect(await page.getTeamElementFormFullNameField().isPresent());
		expect(await page.getTeamElementFormShortNameField().isPresent());
		expect(await page.getTeamElementFormSubmitButton().isPresent());
		expect(await page.getTeamElementFormSubmitButton().isEnabled());
		expect(await page.getTeamElementFormCancelButton().isPresent());
		expect(await page.getTeamElementFormCancelButton().isEnabled());
		expect(await page.getTeamElementFormFullNameField().isEnabled());
		expect(await page.getTeamElementFormShortNameField().isEnabled());

		EndToEndTestUtils.clearInputTextElement(
			page.getTeamElementFormFullNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormFullNameRequiredErrorMessageBloc()
				.isPresent()
		);

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

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormShortNameRequiredErrorMessageBloc()
				.isPresent()
		);

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
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementEditButton(0));
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormShortNameField().isPresent());
		expect(await page.getTeamElementFormShortNameField().isEnabled());

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

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormShortNameMaxLengthErrorMessageBloc()
				.isPresent()
		);

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
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementEditButton(0));
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormFullNameField().isPresent());
		expect(await page.getTeamElementFormFullNameField().isEnabled());

		EndToEndTestUtils.inputTextInFieldElement(
			'1',
			page.getTeamElementFormFullNameField(),
			false
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('my first team1');

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page.getTeamElementFormSubmitButton().isEnabled()
		).toBeTruthy();

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementFormSubmitButton());

		expect(await page.getTeamListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewButton(0));
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormFullNameField().isPresent());

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('my first team1');
	});

	it('should cancel the form values edition when the cancel button is clicked in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementEditButton(0));
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormFullNameField().isPresent());
		expect(await page.getTeamElementFormFullNameField().isEnabled());

		EndToEndTestUtils.inputTextInFieldElement(
			'1',
			page.getTeamElementFormFullNameField(),
			false
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('my first team1');

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page.getTeamElementFormCancelButton().isEnabled()
		).toBeTruthy();

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementFormCancelButton());

		expect(await page.getTeamListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewButton(0));
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormFullNameField().isPresent());

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('my first team');
	});

	it('should create new team when the save button is clicked in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent());
		expect(await page.getTeamElementCreateButton().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementCreateButton());
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormFullNameField().isPresent());
		expect(await page.getTeamElementFormFullNameField().isEnabled());
		expect(await page.getTeamElementFormShortNameField().isPresent());
		expect(await page.getTeamElementFormShortNameField().isEnabled());

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

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

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

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page.getTeamElementFormSubmitButton().isEnabled()
		).toBeTruthy();

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementFormSubmitButton());

		expect(await page.getTeamListElement().isPresent());

		const teamElementList = page.getTeamListElement().all(by.css('li'));

		void teamElementList.count().then(async (count: number) => {
			EndToEndTestUtils.clickOnPageElement(
				page.getTeamElementViewButton(count)
			);
			expect(await page.getTeamElementViewForm().isPresent());
			expect(await page.getTeamElementFormFullNameField().isPresent());
			expect(await page.getTeamElementFormShortNameField().isPresent());

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
		});
	});

	it('should cancel the team creation when the cancel button is clicked in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementEditButton(0));
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormFullNameField().isPresent());
		expect(await page.getTeamElementFormFullNameField().isEnabled());
		expect(await page.getTeamElementFormShortNameField().isPresent());
		expect(await page.getTeamElementFormShortNameField().isEnabled());

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

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());
		expect(
			await page.getTeamElementFormCancelButton().isEnabled()
		).toBeTruthy();

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementFormCancelButton());
		expect(await page.getTeamListElement().isPresent());
	});

	it('should display error text when the required fields are empty in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementCreateButton());
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormIdField().isPresent()).toBeFalsy();
		expect(await page.getTeamElementFormFullNameField().isPresent());
		expect(await page.getTeamElementFormShortNameField().isPresent());
		expect(await page.getTeamElementFormSubmitButton().isPresent());
		expect(await page.getTeamElementFormSubmitButton().isEnabled());
		expect(await page.getTeamElementFormCancelButton().isPresent());
		expect(await page.getTeamElementFormCancelButton().isEnabled());
		expect(await page.getTeamElementFormFullNameField().isEnabled());
		expect(await page.getTeamElementFormShortNameField().isEnabled());

		EndToEndTestUtils.clearInputTextElement(
			page.getTeamElementFormFullNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getTeamElementFormFullNameField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormFullNameRequiredErrorMessageBloc()
				.isPresent()
		);

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

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormShortNameRequiredErrorMessageBloc()
				.isPresent()
		);

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
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());
		expect(await page.getTeamListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getTeamElementCreateButton());
		expect(await page.getTeamElementViewForm().isPresent());
		expect(await page.getTeamElementFormShortNameField().isPresent());
		expect(await page.getTeamElementFormShortNameField().isEnabled());

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

		EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		expect(
			await page
				.getTeamElementFormShortNameMaxLengthErrorMessageBloc()
				.isPresent()
		);

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

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(
			jasmine.objectContaining({
				level: logging.Level.SEVERE
			} as logging.Entry)
		);
	});
});
