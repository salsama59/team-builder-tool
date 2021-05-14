import { browser, by, logging } from 'protractor';
import { AppPage } from './utils/app.po';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';

describe('Team builder statuses section', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
		void browser.driver.manage().window().maximize();
	});

	it('should display the status list when the statuses tab is clicked', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
		expect(await page.getStatusListElement().isPresent());
		expect(
			await EndToEndTestUtils.isElementHasClass(
				page.getHeaderStatusesTabElement(),
				'active'
			)
		);
	});

	it('should display the selected status element when the view button is clicked', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
		expect(await page.getStatusListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewButton(0));
		expect(await page.getStatusElementViewForm().isPresent());

		expect(await page.getStatusElementFormStatusIdField().isPresent());
		expect(await page.getStatusElementFormPlayerIdField().isPresent());
		expect(await page.getStatusElementFormSpeedField().isPresent());
		expect(await page.getStatusElementFormStaminaField().isPresent());
		expect(await page.getStatusElementFormCatchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPitchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPassEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingEffectField().isPresent());

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
		).toEqual('10');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormStaminaField()
			)
		).toEqual('27');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormCatchEfficiencyField()
			)
		).toEqual('60.5');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchEfficiencyField()
			)
		).toEqual('70.5');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPassEfficiencyField()
			)
		).toEqual('45');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormBattingEfficiencyField()
			)
		).toEqual('5');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormBattingPowerField()
			)
		).toEqual('50');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchingPowerField()
			)
		).toEqual('78');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchingEffectField()
			)
		).toEqual('15');
	});

	it('should display the selected status element when the edit button is clicked', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
		expect(await page.getStatusListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getStatusElementEditButton(0));
		expect(await page.getStatusElementViewForm().isPresent());

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent());
		expect(await page.getStatusElementFormProfileNameField().isPresent());
		expect(await page.getStatusElementFormSpeedField().isPresent());
		expect(await page.getStatusElementFormStaminaField().isPresent());
		expect(await page.getStatusElementFormCatchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPitchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPassEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingEffectField().isPresent());

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
		).toEqual('10');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormStaminaField()
			)
		).toEqual('27');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormCatchEfficiencyField()
			)
		).toEqual('60.5');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchEfficiencyField()
			)
		).toEqual('70.5');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPassEfficiencyField()
			)
		).toEqual('45');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormBattingEfficiencyField()
			)
		).toEqual('5');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormBattingPowerField()
			)
		).toEqual('50');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchingPowerField()
			)
		).toEqual('78');
		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormPitchingEffectField()
			)
		).toEqual('15');
	});

	it('should display error text when the required fields are empty in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
		expect(await page.getStatusListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getStatusElementEditButton(0));
		expect(await page.getStatusElementViewForm().isPresent());

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent());
		expect(await page.getStatusElementFormProfileNameField().isPresent());
		expect(await page.getStatusElementFormSpeedField().isPresent());
		expect(await page.getStatusElementFormStaminaField().isPresent());
		expect(await page.getStatusElementFormCatchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPitchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPassEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingEffectField().isPresent());

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

		EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewForm());

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
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
		expect(await page.getStatusListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getStatusElementEditButton(0));
		expect(await page.getStatusElementViewForm().isPresent());

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent());
		expect(await page.getStatusElementFormProfileNameField().isPresent());
		expect(await page.getStatusElementFormSpeedField().isPresent());
		expect(await page.getStatusElementFormStaminaField().isPresent());
		expect(await page.getStatusElementFormCatchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPitchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPassEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingEffectField().isPresent());

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
		EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementFormSubmitButton()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		expect(await page.getStatusElementViewButton(0).isPresent()).toBe(true);
		void EndToEndTestUtils.scrollToElement(page.getStatusElementViewButton(0))
			.then(async (result) => {
				if (result) {
					EndToEndTestUtils.clickOnPageElement(
						page.getStatusElementViewButton(0)
					);
					expect(await page.getStatusElementViewForm().isPresent()).toBe(true);
					expect(await page.getStatusElementFormSpeedField().isPresent()).toBe(
						true
					);
					expect(
						await EndToEndTestUtils.getElementValueAttribute(
							page.getStatusElementFormProfileNameField()
						)
					).toEqual('NEW PROFILE');
				}
			})
			.catch();
	});

	it('should cancel the form values edition when the cancel button is clicked in edit mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
		expect(await page.getStatusListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getStatusElementEditButton(0));
		expect(await page.getStatusElementViewForm().isPresent());

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent());
		expect(await page.getStatusElementFormProfileNameField().isPresent());
		expect(await page.getStatusElementFormSpeedField().isPresent());
		expect(await page.getStatusElementFormStaminaField().isPresent());
		expect(await page.getStatusElementFormCatchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPitchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPassEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingEffectField().isPresent());

		EndToEndTestUtils.inputTextInFieldElement(
			'EDITED PROFILE',
			page.getStatusElementFormProfileNameField(),
			true
		);

		EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewForm());

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('EDITED PROFILE');

		expect(await page.getStatusElementFormCancelButton().isEnabled()).toBe(
			true
		);
		EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementFormCancelButton()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
		expect(await page.getStatusElementViewButton(0).isPresent()).toBe(true);
		void EndToEndTestUtils.scrollToElement(page.getStatusElementViewButton(0))
			.then(async (result) => {
				if (result) {
					EndToEndTestUtils.clickOnPageElement(
						page.getStatusElementViewButton(0)
					);
					expect(await page.getStatusElementViewForm().isPresent()).toBe(true);
					expect(
						await page.getStatusElementFormProfileNameField().isPresent()
					).toBe(true);
					expect(
						await EndToEndTestUtils.getElementContentText(
							page.getStatusElementFormProfileNameField()
						)
					).toEqual('EDITED PROFILE');
				}
			})
			.catch();
	});

	it('should create new status when the save button is clicked in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
		expect(await page.getStatusListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getStatusElementCreateButton());
		expect(await page.getStatusElementViewForm().isPresent());

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent());
		expect(await page.getStatusElementFormProfileNameField().isPresent());
		expect(await page.getStatusElementFormSpeedField().isPresent());
		expect(await page.getStatusElementFormStaminaField().isPresent());
		expect(await page.getStatusElementFormCatchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPitchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPassEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingEffectField().isPresent());

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

		EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewForm());

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

		// EndToEndTestUtils.clickOnPageElement(
		// 	page.getStatusElementFormSpeedHelpBlock()
		// );

		expect(await page.getStatusElementFormSubmitButton().isEnabled()).toBe(
			true
		);
		EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementFormSubmitButton()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);

		const statusElementList = page.getStatusListElement().all(by.css('li'));

		void statusElementList
			.count()
			.then(async (count: number) => {
				expect(await page.getStatusElementViewButton(count).isPresent()).toBe(
					true
				);
				void EndToEndTestUtils.scrollToElement(
					page.getStatusElementViewButton(count)
				)
					.then(async (result) => {
						if (result) {
							EndToEndTestUtils.clickOnPageElement(
								page.getStatusElementViewButton(count)
							);
							expect(await page.getStatusElementViewForm().isPresent()).toBe(
								true
							);
							expect(
								await page.getStatusElementFormProfileNameField().isPresent()
							).toBe(true);
							expect(
								await EndToEndTestUtils.getElementValueAttribute(
									page.getStatusElementFormProfileNameField()
								)
							).toEqual('NEW PROFILE');
						}
					})
					.catch();
			})
			.catch();
	});

	it('should cancel the status creation when the cancel button is clicked in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
		expect(await page.getStatusListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getStatusElementCreateButton());
		expect(await page.getStatusElementViewForm().isPresent());

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent());
		expect(await page.getStatusElementFormProfileNameField().isPresent());
		expect(await page.getStatusElementFormSpeedField().isPresent());
		expect(await page.getStatusElementFormStaminaField().isPresent());
		expect(await page.getStatusElementFormCatchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPitchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPassEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingEffectField().isPresent());

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

		EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewForm());

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

		// EndToEndTestUtils.clickOnPageElement(
		// 	page.getStatusElementFormSpeedHelpBlock()
		// );

		expect(
			await EndToEndTestUtils.getElementValueAttribute(
				page.getStatusElementFormProfileNameField()
			)
		).toEqual('NEW PROFILE');
		expect(await page.getStatusElementFormCancelButton().isEnabled()).toBe(
			true
		);
		EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementFormCancelButton()
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
	});

	it('should display error text when the required fields are empty in create mode', async () => {
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
		expect(await page.getStatusListElement().isPresent());
		EndToEndTestUtils.clickOnPageElement(page.getStatusElementCreateButton());
		expect(await page.getStatusElementViewForm().isPresent());

		expect(await page.getStatusElementFormStatusIdField().isPresent()).toBe(
			false
		);
		expect(await page.getStatusElementFormPlayerIdField().isPresent());
		expect(await page.getStatusElementFormProfileNameField().isPresent());
		expect(await page.getStatusElementFormSpeedField().isPresent());
		expect(await page.getStatusElementFormStaminaField().isPresent());
		expect(await page.getStatusElementFormCatchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPitchEfficiencyField().isPresent());
		expect(await page.getStatusElementFormPassEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingEfficiencyField().isPresent());
		expect(await page.getStatusElementFormBattingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingPowerField().isPresent());
		expect(await page.getStatusElementFormPitchingEffectField().isPresent());

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

		EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewForm());

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
		await page.navigateTo();
		EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
		expect(await page.getStatusListElement().isPresent());
		const initialStatusElementList = page
			.getStatusListElement()
			.all(by.css('li'));

		void initialStatusElementList
			.count()
			.then((initialCount: number) => {
				EndToEndTestUtils.clickOnPageElement(
					page.getStatusElementDeleteButton(0)
				);
				const currentStatusElementList = page
					.getStatusListElement()
					.all(by.css('li'));
				void currentStatusElementList
					.count()
					.then((currentCount: number) => {
						expect(currentCount).toBeLessThan(initialCount);
					})
					.catch(() => {
						return false;
					});
			})
			.catch(() => {
				return false;
			});
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
