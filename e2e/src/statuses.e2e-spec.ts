import { browser, logging } from 'protractor';
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
