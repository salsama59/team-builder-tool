import { AppPage } from './utils/app.po';
import { browser, logging } from 'protractor';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';
import { version } from '../../package.json';

describe('Team builder footer section', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
		void browser.driver.manage().window().maximize();
	});

	it('should display the copyright', async () => {
		await page.navigateTo();
		const copyrightPrefix: string = '© Copyright ';
		const developerName: string = ' Saül YEPONDE';
		const startYear: string = '2021';
		const currentYear: string = new Date().getFullYear().toString();

		if (currentYear === startYear) {
			expect(
				await EndToEndTestUtils.getElementContentText(
					page.getFooterElement('app-copyright')
				)
			).toEqual(copyrightPrefix + currentYear + developerName);
		} else {
			expect(
				await EndToEndTestUtils.getElementContentText(
					page.getFooterElement('app-copyright')
				)
			).toEqual(
				copyrightPrefix + startYear + '-' + currentYear + developerName
			);
		}
	});

	it('should display the application version', async () => {
		await page.navigateTo();
		expect(
			await EndToEndTestUtils.getElementContentText(
				page.getFooterElement('app-version')
			)
		).toEqual('Version : ' + version);
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
