import { browser, by, logging } from 'protractor';
import { AppPage } from './utils/app.po';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';

describe('Team builder players section', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
		void browser.driver.manage().window().maximize();
	});

	it('should display the player list when the players tab is clicked', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		expect(
			await EndToEndTestUtils.isElementHasClass(
				page.getHeaderPlayersTabElement(),
				'active'
			)
		);
	});

	it('should display the selected player element with read only fields when the view button is clicked', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());

		expect(await page.getPlayerElementFormPlayerIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerStatusIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerAbilityIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerFirstNameField().isPresent());
		expect(await page.getPlayerElementFormPlayerLastNameField().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
		);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isPresent()
		);

		expect(
			await page.getPlayerElementFormPlayerIdField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormPlayerTeamIdField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormPlayerAbilityIdField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormPlayerFirstNameField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isEnabled()
		).toBeFalsy();
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isEnabled()
		).toBeFalsy();

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerIdField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerTeamIdField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerStatusIdField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerAbilityIdField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerFirstNameField()
			)
		).toEqual('Joe');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('Stanford');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('00');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerFieldPositionField()
			)
		).toEqual('CENTER_FIELDER');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormDefaultPlayerFieldPositionField()
			)
		).toEqual('CENTER_FIELDER');
	});

	it('should display the selected player element with open fields when the edit button is clicked', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementEditButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(
			await page.getPlayerElementFormPlayerIdField().isPresent()
		).toBeFalsy();
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerStatusIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerAbilityIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerFirstNameField().isPresent());
		expect(await page.getPlayerElementFormPlayerLastNameField().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
		);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isPresent()
		);

		expect(await page.getPlayerElementFormSubmitButton().isPresent());
		expect(await page.getPlayerElementFormSubmitButton().isEnabled());

		expect(await page.getPlayerElementFormPlayerTeamIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerStatusIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerAbilityIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerFirstNameField().isEnabled());
		expect(await page.getPlayerElementFormPlayerLastNameField().isEnabled());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isEnabled()
		);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isEnabled()
		);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isEnabled()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerTeamIdField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerStatusIdField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerAbilityIdField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerFirstNameField()
			)
		).toEqual('Joe');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('Stanford');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('00');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerFieldPositionField()
			)
		).toEqual('CENTER_FIELDER');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormDefaultPlayerFieldPositionField()
			)
		).toEqual('CENTER_FIELDER');
	});

	it('should display error text when the required fields are empty in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementEditButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(
			await page.getPlayerElementFormPlayerIdField().isPresent()
		).toBeFalsy();
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerStatusIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerAbilityIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerFirstNameField().isPresent());
		expect(await page.getPlayerElementFormPlayerLastNameField().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
		);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isPresent()
		);

		expect(await page.getPlayerElementFormSubmitButton().isPresent());
		expect(await page.getPlayerElementFormSubmitButton().isEnabled());

		expect(await page.getPlayerElementFormPlayerTeamIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerStatusIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerAbilityIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerFirstNameField().isEnabled());
		expect(await page.getPlayerElementFormPlayerLastNameField().isEnabled());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isEnabled()
		);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isEnabled()
		);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isEnabled()
		);

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerTeamIdField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerTeamIdField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerTeamIdRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerTeamIdRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerStatusIdField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerStatusIdField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerStatusIdRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerStatusIdRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerAbilityIdField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerAbilityIdField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerAbilityIdRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerAbilityIdRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerFirstNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerFirstNameField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormPlayerAbilityIdField()
		);

		expect(
			await page
				.getPlayerElementFormPlayerFirstNameRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerFirstNameRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerLastNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerLastNameRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerLastNameRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerUniformNumberField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerUniformNumberRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player team id field value do not exist amids the teams in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementEditButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent());

		EndToEndTestUtils.inputTextInFieldElement(
			'1000',
			page.getPlayerElementFormPlayerTeamIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerTeamIdField()
			)
		).toEqual('1000');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerTeamIdPlayerTeamIdNotExistsErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerTeamIdPlayerTeamIdNotExistsErrorMessageBloc()
			)
		).toEqual('This player team id do not exists!');

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player status id field value do not exist amids the statuses in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementEditButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(await page.getPlayerElementFormPlayerStatusIdField().isPresent());

		EndToEndTestUtils.inputTextInFieldElement(
			'1000',
			page.getPlayerElementFormPlayerStatusIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerStatusIdField()
			)
		).toEqual('1000');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerStatusIdPlayerStatusIdNotExistsErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerStatusIdPlayerStatusIdNotExistsErrorMessageBloc()
			)
		).toEqual('This player status id do not exists!');

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player uniform number field value length is less than 2 in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementEditButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'1',
			page.getPlayerElementFormPlayerUniformNumberField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('1');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberMinLengthErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerUniformNumberMinLengthErrorMessageBloc()
			)
		).toEqual(
			'This player uniform number length must be greater or equals than 2'
		);

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player uniform number field value length is greater than 3 in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementEditButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'1234',
			page.getPlayerElementFormPlayerUniformNumberField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('1234');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberMaxLengthErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerUniformNumberMaxLengthErrorMessageBloc()
			)
		).toEqual('This player uniform number length must be lower or equals 3');

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player uniform number field value do not respect the /^[0-9]+$/ pattern in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementEditButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'aaa',
			page.getPlayerElementFormPlayerUniformNumberField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('aaa');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberPatternErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerUniformNumberPatternErrorMessageBloc()
			)
		).toEqual(
			'This player uniform number must respect the following pattern : /^[0-9]+$/'
		);

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player uniform number field value must be unique within his team in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementEditButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'01',
			page.getPlayerElementFormPlayerUniformNumberField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('01');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberUniqueErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerUniformNumberUniqueErrorMessageBloc()
			)
		).toEqual('This player uniform number must be unique inside the team');

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should save the form values when the save button is clicked in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementEditButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(await page.getPlayerElementFormPlayerLastNameField().isPresent());

		EndToEndTestUtils.inputTextInFieldElement(
			'1',
			page.getPlayerElementFormPlayerLastNameField(),
			false
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('Stanford1');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeTruthy();

		EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormSubmitButton()
		);

		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(await page.getPlayerElementFormPlayerLastNameField().isPresent());

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('Stanford1');
	});

	it('should cancel the form values edition when the cancel button is clicked in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementEditButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(await page.getPlayerElementFormPlayerLastNameField().isPresent());

		EndToEndTestUtils.inputTextInFieldElement(
			'1',
			page.getPlayerElementFormPlayerLastNameField(),
			false
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('Stanford1');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();

		EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormCancelButton()
		);

		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewButton(0));
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(await page.getPlayerElementFormPlayerLastNameField().isPresent());

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('Stanford');
	});

	it('should create new player when the save button is clicked in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		expect(await page.getPlayerElementCreateButton().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementCreateButton());
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerStatusIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerAbilityIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerFirstNameField().isPresent());
		expect(await page.getPlayerElementFormPlayerLastNameField().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
		);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isPresent()
		);

		expect(await page.getPlayerElementFormSubmitButton().isPresent());
		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();

		expect(await page.getPlayerElementFormPlayerTeamIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerStatusIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerAbilityIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerFirstNameField().isEnabled());
		expect(await page.getPlayerElementFormPlayerLastNameField().isEnabled());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isEnabled()
		);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isEnabled()
		);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isEnabled()
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'1',
			page.getPlayerElementFormPlayerTeamIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerTeamIdField()
			)
		).toEqual('1');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			'1',
			page.getPlayerElementFormPlayerStatusIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerStatusIdField()
			)
		).toEqual('1');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			'1',
			page.getPlayerElementFormPlayerAbilityIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerAbilityIdField()
			)
		).toEqual('1');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			'first name',
			page.getPlayerElementFormPlayerFirstNameField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerFirstNameField()
			)
		).toEqual('first name');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			'last name',
			page.getPlayerElementFormPlayerLastNameField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('last name');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			'007',
			page.getPlayerElementFormPlayerUniformNumberField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('007');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormPlayerFieldPositionField()
		);

		EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormPlayerFieldPositionListElement(0)
		);

		EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormDefaultPlayerFieldPositionField()
		);

		EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormDefaultPlayerFieldPositionListElement(0)
		);

		expect(await page.getPlayerElementFormSubmitButton().isEnabled());

		EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormSubmitButton()
		);

		expect(await page.getPlayerListElement().isPresent());

		const playerElementList = page.getPlayerListElement().all(by.css('li'));

		void playerElementList
			.count()
			.then(async (count: number) => {
				EndToEndTestUtils.clickOnPageElement(
					page.getPlayerElementViewButton(count)
				);
				expect(await page.getPlayerElementViewForm().isPresent());
				expect(
					await page.getPlayerElementFormPlayerFirstNameField().isPresent()
				);
				expect(
					await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
				);

				expect(
					await EndToEndTestUtils.getElementValueAttribute(
						page.getPlayerElementFormPlayerFirstNameField()
					)
				).toEqual('first name');
			})
			.catch((result) => {
				expect(result).toBeTruthy();
			});
	});

	it('should cancel the player creation when the cancel button is clicked in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementCreateButton());
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(await page.getPlayerElementFormPlayerLastNameField().isPresent());

		EndToEndTestUtils.inputTextInFieldElement(
			'test1',
			page.getPlayerElementFormPlayerLastNameField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('test1');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();

		EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormCancelButton()
		);

		expect(await page.getPlayerListElement().isPresent());
	});

	it('should display error text when the required fields are empty in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementCreateButton());
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(
			await page.getPlayerElementFormPlayerIdField().isPresent()
		).toBeFalsy();
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerStatusIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerAbilityIdField().isPresent());
		expect(await page.getPlayerElementFormPlayerFirstNameField().isPresent());
		expect(await page.getPlayerElementFormPlayerLastNameField().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
		);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isPresent()
		);

		expect(await page.getPlayerElementFormSubmitButton().isPresent());
		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();

		expect(await page.getPlayerElementFormPlayerTeamIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerStatusIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerAbilityIdField().isEnabled());
		expect(await page.getPlayerElementFormPlayerFirstNameField().isEnabled());
		expect(await page.getPlayerElementFormPlayerLastNameField().isEnabled());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isEnabled()
		);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isEnabled()
		);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isEnabled()
		);

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerTeamIdField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerTeamIdField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerTeamIdRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerTeamIdRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerStatusIdField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerStatusIdField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerStatusIdRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerStatusIdRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerAbilityIdField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerAbilityIdField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerAbilityIdRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerAbilityIdRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerFirstNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerFirstNameField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormPlayerAbilityIdField()
		);

		expect(
			await page
				.getPlayerElementFormPlayerFirstNameRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerFirstNameRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerLastNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerLastNameRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerLastNameRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		EndToEndTestUtils.clearInputTextElement(
			page.getPlayerElementFormPlayerUniformNumberField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerUniformNumberRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player team id field value do not exist amids the teams in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementCreateButton());
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent());

		EndToEndTestUtils.inputTextInFieldElement(
			'1000',
			page.getPlayerElementFormPlayerTeamIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerTeamIdField()
			)
		).toEqual('1000');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerTeamIdPlayerTeamIdNotExistsErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerTeamIdPlayerTeamIdNotExistsErrorMessageBloc()
			)
		).toEqual('This player team id do not exists!');

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player status id field value do not exist amids the statuses in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementCreateButton());
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(await page.getPlayerElementFormPlayerStatusIdField().isPresent());

		EndToEndTestUtils.inputTextInFieldElement(
			'1000',
			page.getPlayerElementFormPlayerStatusIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerStatusIdField()
			)
		).toEqual('1000');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerStatusIdPlayerStatusIdNotExistsErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerStatusIdPlayerStatusIdNotExistsErrorMessageBloc()
			)
		).toEqual('This player status id do not exists!');

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player uniform number field value length is less than 2 in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementCreateButton());
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'1',
			page.getPlayerElementFormPlayerUniformNumberField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('1');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberMinLengthErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerUniformNumberMinLengthErrorMessageBloc()
			)
		).toEqual(
			'This player uniform number length must be greater or equals than 2'
		);

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player uniform number field value length is greater than 3 in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementCreateButton());
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'1234',
			page.getPlayerElementFormPlayerUniformNumberField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('1234');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberMaxLengthErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerUniformNumberMaxLengthErrorMessageBloc()
			)
		).toEqual('This player uniform number length must be lower or equals 3');

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player uniform number field value do not respect the /^[0-9]+$/ pattern in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementCreateButton());
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'aaa',
			page.getPlayerElementFormPlayerUniformNumberField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('aaa');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberPatternErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerUniformNumberPatternErrorMessageBloc()
			)
		).toEqual(
			'This player uniform number must respect the following pattern : /^[0-9]+$/'
		);

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should display error text when the player uniform number field value must be unique within his team in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
		expect(await page.getPlayerListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementCreateButton());
		expect(await page.getPlayerElementViewForm().isPresent());
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		);

		EndToEndTestUtils.inputTextInFieldElement(
			'0',
			page.getPlayerElementFormPlayerTeamIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerTeamIdField()
			)
		).toEqual('0');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			'01',
			page.getPlayerElementFormPlayerUniformNumberField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('01');

		EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());
		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberUniqueErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getPlayerElementFormPlayerUniformNumberUniqueErrorMessageBloc()
			)
		).toEqual('This player uniform number must be unique inside the team');

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
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
