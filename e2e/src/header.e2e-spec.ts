import { AppPage } from './utils/app.po';
import { browser, logging } from 'protractor';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';

describe('Team builder header section', () => {
	let page: AppPage;

	beforeEach(async () => {
		page = new AppPage();
		await browser.driver.manage().window().maximize();
	});

	it('should display the app title', async () => {
		await page.navigateTo();
		expect(
			await EndToEndTestUtils.getElementContentText(page.getTitleElement())
		).toEqual('Teams builder tool');
	});

	it('should display the home tab', async () => {
		await page.navigateTo();
		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getHeaderHomeTabElement()
			)
		).toEqual('Home');
	});

	it('should display the teams tab', async () => {
		await page.navigateTo();
		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getHeaderTeamsTabElement()
			)
		).toEqual('Teams');
	});

	it('should display the exports tab', async () => {
		await page.navigateTo();
		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getHeaderExportsTabElement()
			)
		).toEqual('Exports');
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
