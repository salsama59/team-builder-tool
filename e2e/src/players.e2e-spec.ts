import { browser, by, ElementArrayFinder, logging } from 'protractor';
import { Team } from '../../src/app/models/team.model';
import { PlayerFieldPositionEnum } from '../../src/app/enums/player-field-position.enum';
import { Player } from '../../src/app/models/player.model';
import { AppPage } from './utils/app.po';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';
import { PlayerUtilsPageObject } from './utils/player-utils.po';
import { TeamUtilsPageObject } from './utils/team-utils.po';
import { StatusUtilsPageObject } from './utils/status-utils.po';
import { Status } from '../../src/app/models/status.model';

describe('Team builder players section', () => {
	let page: AppPage;
	const createdPlayer: Player = new Player(
		0,
		0,
		0,
		0,
		'Joe',
		'Stanford',
		'00',
		PlayerFieldPositionEnum.CENTER_FIELDER,
		PlayerFieldPositionEnum.CENTER_FIELDER
	);
	const createdTeam: Team = new Team(0, 'The grand slam', 'TGS');
	const createdStatus: Status = new Status(
		0,
		0,
		'test',
		10,
		27,
		60.5,
		70.5,
		45,
		5,
		50,
		78,
		15
	);
	beforeEach(async () => {
		page = new AppPage();
		await browser.driver.manage().window().maximize();
		await page.navigateTo();
		await TeamUtilsPageObject.createTeam(page, createdTeam);
		await StatusUtilsPageObject.createStatus(page, createdStatus);
		await PlayerUtilsPageObject.createPlayer(page, createdPlayer);
	});

	it('should display the player list when the players tab is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		expect(
			await EndToEndTestUtils.isElementHasClass(
				page.getHeaderPlayersTabElement(),
				'active'
			)
		);
	});

	it('should display the selected player element with read only fields when the view button is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementViewButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(await page.getPlayerElementFormPlayerIdField().isPresent()).toBe(
			true
		);
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerAbilityIdField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFirstNameField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
		).toBe(true);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementEditButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerIdField().isPresent()
		).toBeFalsy();
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerAbilityIdField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFirstNameField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
		).toBe(true);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isPresent()
		).toBe(true);

		expect(await page.getPlayerElementFormSubmitButton().isPresent()).toBe(
			true
		);
		expect(await page.getPlayerElementFormSubmitButton().isEnabled()).toBe(
			true
		);

		expect(await page.getPlayerElementFormPlayerTeamIdField().isEnabled()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerAbilityIdField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFirstNameField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isEnabled()
		).toBe(true);
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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementEditButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerIdField().isPresent()
		).toBeFalsy();
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerAbilityIdField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFirstNameField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
		).toBe(true);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isPresent()
		).toBe(true);

		expect(await page.getPlayerElementFormSubmitButton().isPresent()).toBe(
			true
		);
		expect(await page.getPlayerElementFormSubmitButton().isEnabled()).toBe(
			true
		);

		expect(await page.getPlayerElementFormPlayerTeamIdField().isEnabled()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerAbilityIdField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFirstNameField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isEnabled()
		).toBe(true);
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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerTeamIdRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerStatusIdRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerAbilityIdRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormPlayerAbilityIdField()
		);

		expect(
			await page
				.getPlayerElementFormPlayerFirstNameRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerLastNameRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementEditButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent()).toBe(
			true
		);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerTeamIdPlayerTeamIdNotExistsErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementEditButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerStatusIdPlayerStatusIdNotExistsErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementEditButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberMinLengthErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementEditButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberMaxLengthErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementEditButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberPatternErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await PlayerUtilsPageObject.createPlayer(
			page,
			new Player(
				23,
				0,
				0,
				0,
				'Jack',
				'Nabot',
				'01',
				PlayerFieldPositionEnum.FIRST_BASEMAN,
				PlayerFieldPositionEnum.SECOND_BASEMAN
			)
		);
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementEditButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberUniqueErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementEditButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeTruthy();

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormSubmitButton()
		);

		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementViewButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isPresent()
		).toBe(true);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('Stanford1');
	});

	it('should cancel the form values edition when the cancel button is clicked in edit mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementEditButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormCancelButton()
		);

		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementViewButton(0)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isPresent()
		).toBe(true);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerLastNameField()
			)
		).toEqual('Stanford');
	});

	it('should create new player when the save button is clicked in create mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		expect(await page.getPlayerElementCreateButton().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementCreateButton()
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerAbilityIdField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFirstNameField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
		).toBe(true);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isPresent()
		).toBe(true);

		expect(await page.getPlayerElementFormSubmitButton().isPresent()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();

		expect(await page.getPlayerElementFormPlayerTeamIdField().isEnabled()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerAbilityIdField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFirstNameField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isEnabled()
		).toBe(true);
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
			'0',
			page.getPlayerElementFormPlayerTeamIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerTeamIdField()
			)
		).toEqual('0');

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			'0',
			page.getPlayerElementFormPlayerStatusIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerStatusIdField()
			)
		).toEqual('0');

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			'0',
			page.getPlayerElementFormPlayerAbilityIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerAbilityIdField()
			)
		).toEqual('0');

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormPlayerFieldPositionField()
		);

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormPlayerFieldPositionListElement(0)
		);

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormDefaultPlayerFieldPositionField()
		);

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormDefaultPlayerFieldPositionListElement(0)
		);

		expect(await page.getPlayerElementFormSubmitButton().isEnabled()).toBe(
			true
		);

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormSubmitButton()
		);

		expect(await page.getPlayerListElement().isPresent()).toBe(true);

		const playerElementList: ElementArrayFinder = page
			.getPlayerListElement()
			.all(by.css('li'));

		const playerElementListCount: number = await playerElementList.count();
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementViewButton(playerElementListCount - 1)
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFirstNameField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
		).toBe(true);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerFirstNameField()
			)
		).toEqual('first name');
	});

	it('should cancel the player creation when the cancel button is clicked in create mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementCreateButton()
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page.getPlayerElementFormCancelButton().isEnabled()
		).toBeTruthy();

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormCancelButton()
		);

		expect(await page.getPlayerListElement().isPresent()).toBe(true);
	});

	it('should display error text when the required fields are empty in create mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementCreateButton()
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerIdField().isPresent()
		).toBeFalsy();
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerAbilityIdField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFirstNameField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFieldPositionField().isPresent()
		).toBe(true);
		expect(
			await page
				.getPlayerElementFormDefaultPlayerFieldPositionField()
				.isPresent()
		).toBe(true);

		expect(await page.getPlayerElementFormSubmitButton().isPresent()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormSubmitButton().isEnabled()
		).toBeFalsy();

		expect(await page.getPlayerElementFormPlayerTeamIdField().isEnabled()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerAbilityIdField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerFirstNameField().isEnabled()
		).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerLastNameField().isEnabled()
		).toBe(true);
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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerTeamIdRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerStatusIdRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerAbilityIdRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormPlayerAbilityIdField()
		);

		expect(
			await page
				.getPlayerElementFormPlayerFirstNameRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerLastNameRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberRequiredErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementCreateButton()
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent()).toBe(
			true
		);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerTeamIdPlayerTeamIdNotExistsErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementCreateButton()
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerStatusIdField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerStatusIdPlayerStatusIdNotExistsErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementCreateButton()
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberMinLengthErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementCreateButton()
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberMaxLengthErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementCreateButton()
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);

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

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberPatternErrorMessageBloc()
				.isPresent()
		).toBe(true);

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
		await PlayerUtilsPageObject.createPlayer(
			page,
			new Player(
				50,
				0,
				0,
				0,
				'John',
				'VERGUN',
				'00',
				PlayerFieldPositionEnum.LEFT_FIELDER,
				PlayerFieldPositionEnum.SHORT_STOP
			)
		);
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		expect(await page.getPlayerElementCreateButton().isPresent()).toBe(true);
		await EndToEndTestUtils.scrollToElement(
			page.getPlayerElementCreateButton()
		);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementCreateButton()
		);
		expect(await page.getPlayerElementViewForm().isPresent()).toBe(true);

		expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent()).toBe(
			true
		);
		expect(
			await page.getPlayerElementFormPlayerUniformNumberField().isPresent()
		).toBe(true);

		EndToEndTestUtils.inputTextInFieldElement(
			'0',
			page.getPlayerElementFormPlayerTeamIdField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerTeamIdField()
			)
		).toEqual('0');

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			'00',
			page.getPlayerElementFormPlayerUniformNumberField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getPlayerElementFormPlayerUniformNumberField()
			)
		).toEqual('00');

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());
		expect(
			await page
				.getPlayerElementFormPlayerUniformNumberUniqueErrorMessageBloc()
				.isPresent()
		).toBe(true);

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

	it('should delete the selected player element when the delete button is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
		const initialPlayerElementList: ElementArrayFinder = page
			.getPlayerListElement()
			.all(by.css('li'));

		const initialPlayerElementListCount: number = await initialPlayerElementList.count();
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementDeleteButton(0)
		);
		const currentPlayerElementList: ElementArrayFinder = page
			.getPlayerListElement()
			.all(by.css('li'));
		const currentPlayerElementListCount: number = await currentPlayerElementList.count();
		expect(currentPlayerElementListCount).toBeLessThan(
			initialPlayerElementListCount
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
