import { browser, by, ElementArrayFinder, logging } from 'protractor';
import { Status } from '../../src/app/models/status.model';
import { AppPage } from './utils/app.po';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';
import { StatusUtilsPageObject } from './utils/status-utils.po';

describe('Team builder statuses section', () => {
	let page: AppPage;
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
		await StatusUtilsPageObject.createStatus(page, createdStatus);
	});

	it('should display the status list when the statuses tab is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderStatusesTabElement()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		expect(
			await EndToEndTestUtils.isElementHasClass(
				page.getHeaderStatusesTabElement(),
				'active'
			)
		);
	});

	it('should display the selected status element when the view button is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderStatusesTabElement()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementViewButton(0)
		);
		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormSpeedField().isPresent()).toBe(true);
		expect(await page.getStatusElementFormStaminaField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPassEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isPresent()
		).toBe(true);
		expect(await page.getStatusElementFormBattingPowerField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormPitchingPowerField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchingEffectField().isPresent()
		).toBe(true);

		expect(
			await page.getStatusElementFormStatusIdField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getStatusElementFormPlayerIdField().isEnabled()
		).toBeFalsy();
		expect(await page.getStatusElementFormSpeedField().isEnabled()).toBeFalsy();
		expect(
			await page.getStatusElementFormStaminaField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getStatusElementFormPassEfficiencyField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getStatusElementFormBattingPowerField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getStatusElementFormPitchingPowerField().isEnabled()
		).toBeFalsy();
		expect(
			await page.getStatusElementFormPitchingEffectField().isEnabled()
		).toBeFalsy();

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormStatusIdField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPlayerIdField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormSpeedField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormStaminaField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormCatchEfficiencyField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchEfficiencyField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPassEfficiencyField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormBattingEfficiencyField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormBattingPowerField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchingPowerField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchingEffectField()
			)
		).toEqual('0');
	});

	it('should display the selected status element when the edit button is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderStatusesTabElement()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementEditButton(0)
		);
		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormProfileNameField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormSpeedField().isPresent()).toBe(true);
		expect(await page.getStatusElementFormStaminaField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPassEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isPresent()
		).toBe(true);
		expect(await page.getStatusElementFormBattingPowerField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormPitchingPowerField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchingEffectField().isPresent()
		).toBe(true);

		expect(
			await page.getStatusElementFormPlayerIdField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormProfileNameField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormSpeedField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormStaminaField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPassEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormBattingPowerField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPitchingPowerField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPitchingEffectField().isEnabled()
		).toBeTruthy();

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPlayerIdField()
			)
		).toEqual('0');

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('test');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormSpeedField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormStaminaField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormCatchEfficiencyField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchEfficiencyField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPassEfficiencyField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormBattingEfficiencyField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormBattingPowerField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchingPowerField()
			)
		).toEqual('0');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchingEffectField()
			)
		).toEqual('0');
	});

	it('should display error text when the required fields are empty in edit mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderStatusesTabElement()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementEditButton(0)
		);
		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormProfileNameField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormSpeedField().isPresent()).toBe(true);
		expect(await page.getStatusElementFormStaminaField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPassEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isPresent()
		).toBe(true);
		expect(await page.getStatusElementFormBattingPowerField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormPitchingPowerField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchingEffectField().isPresent()
		).toBe(true);

		expect(
			await page.getStatusElementFormPlayerIdField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormProfileNameField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormSpeedField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormStaminaField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPassEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormBattingPowerField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPitchingPowerField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPitchingEffectField().isEnabled()
		).toBeTruthy();

		EndToEndTestUtils.clearInputTextElement(
			page.getStatusElementFormProfileNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('');

		await EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewForm());

		expect(
			await page
				.getStatusElementFormProfileNameRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getStatusElementFormProfileNameRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		expect(
			await page.getStatusElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getStatusElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should save the form values when the save button is clicked in edit mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderStatusesTabElement()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementEditButton(0)
		);
		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormProfileNameField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormSpeedField().isPresent()).toBe(true);
		expect(await page.getStatusElementFormStaminaField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPassEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isPresent()
		).toBe(true);
		expect(await page.getStatusElementFormBattingPowerField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormPitchingPowerField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchingEffectField().isPresent()
		).toBe(true);

		EndToEndTestUtils.inputTextInFieldElement(
			'NEW PROFILE',
			page.getStatusElementFormProfileNameField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('NEW PROFILE');
		expect(await page.getStatusElementFormSubmitButton().isEnabled()).toBe(
			true
		);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementFormSubmitButton()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		expect(await page.getStatusElementViewButton(0).isPresent()).toBe(true);
		await EndToEndTestUtils.scrollToElement(page.getStatusElementViewButton(0));
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementViewButton(0)
		);
		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);
		expect(await page.getStatusElementFormSpeedField().isPresent()).toBe(true);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('NEW PROFILE');
	});

	it('should cancel the form values edition when the cancel button is clicked in edit mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderStatusesTabElement()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementEditButton(0)
		);
		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormProfileNameField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormSpeedField().isPresent()).toBe(true);
		expect(await page.getStatusElementFormStaminaField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPassEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isPresent()
		).toBe(true);
		expect(await page.getStatusElementFormBattingPowerField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormPitchingPowerField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchingEffectField().isPresent()
		).toBe(true);

		EndToEndTestUtils.inputTextInFieldElement(
			'EDITED PROFILE',
			page.getStatusElementFormProfileNameField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewForm());

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('EDITED PROFILE');

		expect(await page.getStatusElementFormCancelButton().isEnabled()).toBe(
			true
		);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementFormCancelButton()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		expect(await page.getStatusElementViewButton(0).isPresent()).toBe(true);
		await EndToEndTestUtils.scrollToElement(page.getStatusElementViewButton(0));
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementViewButton(0)
		);
		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);
		expect(await page.getStatusElementFormProfileNameField().isPresent()).toBe(
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('test');
	});

	it('should create new status when the save button is clicked in create mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderStatusesTabElement()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementCreateButton()
		);
		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormProfileNameField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormSpeedField().isPresent()).toBe(true);
		expect(await page.getStatusElementFormStaminaField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPassEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isPresent()
		).toBe(true);
		expect(await page.getStatusElementFormBattingPowerField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormPitchingPowerField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchingEffectField().isPresent()
		).toBe(true);

		EndToEndTestUtils.inputTextInFieldElement(
			'0',
			page.getStatusElementFormPlayerIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPlayerIdField()
			)
		).toEqual('0');

		await EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			'NEW PROFILE',
			page.getStatusElementFormProfileNameField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('NEW PROFILE');

		expect(await page.getStatusElementFormSubmitButton().isEnabled()).toBe(
			true
		);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementFormSubmitButton()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);

		const statusElementList: ElementArrayFinder = page
			.getStatusListElement()
			.all(by.css('li'));

		const statusElementListCount: number = await statusElementList.count();

		expect(
			await page
				.getStatusElementViewButton(statusElementListCount - 1)
				.isPresent()
		).toBe(true);
		await EndToEndTestUtils.scrollToElement(
			page.getStatusElementViewButton(statusElementListCount - 1)
		);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementViewButton(statusElementListCount - 1)
		);
		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);
		expect(await page.getStatusElementFormProfileNameField().isPresent()).toBe(
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('NEW PROFILE');
	});

	it('should cancel the status creation when the cancel button is clicked in create mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderStatusesTabElement()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementCreateButton()
		);
		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormProfileNameField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormSpeedField().isPresent()).toBe(true);
		expect(await page.getStatusElementFormStaminaField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPassEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isPresent()
		).toBe(true);
		expect(await page.getStatusElementFormBattingPowerField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormPitchingPowerField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchingEffectField().isPresent()
		).toBe(true);

		EndToEndTestUtils.inputTextInFieldElement(
			'0',
			page.getStatusElementFormPlayerIdField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPlayerIdField()
			)
		).toEqual('0');

		await EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			'NEW PROFILE',
			page.getStatusElementFormProfileNameField(),
			true
		);
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('NEW PROFILE');

		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('NEW PROFILE');
		expect(await page.getStatusElementFormCancelButton().isEnabled()).toBe(
			true
		);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementFormCancelButton()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
	});

	it('should display error text when the required fields are empty in create mode', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderStatusesTabElement()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementCreateButton()
		);
		expect(await page.getStatusElementViewForm().isPresent()).toBe(true);

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormProfileNameField().isPresent()).toBe(
			true
		);
		expect(await page.getStatusElementFormSpeedField().isPresent()).toBe(true);
		expect(await page.getStatusElementFormStaminaField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPassEfficiencyField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isPresent()
		).toBe(true);
		expect(await page.getStatusElementFormBattingPowerField().isPresent()).toBe(
			true
		);
		expect(
			await page.getStatusElementFormPitchingPowerField().isPresent()
		).toBe(true);
		expect(
			await page.getStatusElementFormPitchingEffectField().isPresent()
		).toBe(true);

		expect(
			await page.getStatusElementFormPlayerIdField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormProfileNameField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormSpeedField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormStaminaField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormCatchEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPitchEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPassEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormBattingEfficiencyField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormBattingPowerField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPitchingPowerField().isEnabled()
		).toBeTruthy();
		expect(
			await page.getStatusElementFormPitchingEffectField().isEnabled()
		).toBeTruthy();

		EndToEndTestUtils.clearInputTextElement(
			page.getStatusElementFormProfileNameField()
		);

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('');

		await EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewForm());

		expect(
			await page
				.getStatusElementFormProfileNameRequiredErrorMessageBloc()
				.isPresent()
		);

		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getStatusElementFormProfileNameRequiredErrorMessageBloc()
			)
		).toEqual('This field is required!');

		expect(
			await page.getStatusElementFormSubmitButton().isEnabled()
		).toBeFalsy();
		expect(
			await page.getStatusElementFormCancelButton().isEnabled()
		).toBeTruthy();
	});

	it('should delete the selected status element when the delete button is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderStatusesTabElement()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		const initialStatusElementList: ElementArrayFinder = page
			.getStatusListElement()
			.all(by.css('li'));

		const initialStatusElementListCount: number = await initialStatusElementList.count();
		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementDeleteButton(0)
		);
		const currentStatusElementList: ElementArrayFinder = page
			.getStatusListElement()
			.all(by.css('li'));
		const currentStatusElementListCount: number = await currentStatusElementList.count();
		expect(currentStatusElementListCount).toBeLessThan(
			initialStatusElementListCount
		);
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		await EndToEndTestUtils.clearLocalStorage();
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(
			jasmine.objectContaining({
				level: logging.Level.SEVERE
			} as logging.Entry)
		);
	});
});
