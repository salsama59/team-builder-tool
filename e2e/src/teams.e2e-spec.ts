import { browser, logging } from 'protractor';
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

	it('should display the selected team element when the view button is clicked', async () => {
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

	it('should display the selected team element when the edit button is clicked', async () => {
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
