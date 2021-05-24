import { AppPage } from './utils/app.po';
import { browser, logging } from 'protractor';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';
import { PlayerFieldPositionEnum } from '../../src/app/enums/player-field-position.enum';
import { Player } from '../../src/app/models/player.model';
import { Status } from '../../src/app/models/status.model';
import { Team } from '../../src/app/models/team.model';
import { PlayerUtilsPageObject } from './utils/player-utils.po';
import { StatusUtilsPageObject } from './utils/status-utils.po';
import { TeamUtilsPageObject } from './utils/team-utils.po';
import fs from 'fs';

describe('Team builder exports section', () => {
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
		EndToEndTestUtils.createNotExistingDirectory('./e2e/e2e_tests/download');
	});

	it('should display the exports view when the Exports tab is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderExportsTabElement()
		);
		expect(await page.getExportsCardElement().isPresent()).toBe(true);
		expect(await page.getExportsDownloadButtonElement().isPresent()).toBe(true);
		expect(await page.getExportsDataPreviewButtonElement().isPresent()).toBe(
			true
		);
	});

	it('should download the json when the dowload button is clicked', async () => {
		const dowloadedFilePath: string =
			'./e2e/e2e_tests/download/model-exporter.json';
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderExportsTabElement()
		);
		expect(await page.getExportsCardElement().isPresent()).toBe(true);
		expect(await page.getExportsDownloadButtonElement().isPresent()).toBe(true);
		expect(await page.getExportsDataPreviewButtonElement().isPresent()).toBe(
			true
		);
		await EndToEndTestUtils.clickOnPageElement(
			page.getExportsDownloadButtonElement()
		);
		await browser.driver.wait(() => {
			// Wait until the file has been downloaded.
			return fs.existsSync(dowloadedFilePath);
		}, 5000);

		expect(fs.readFileSync(dowloadedFilePath, { encoding: 'utf8' })).toContain(
			'teamId'
		);
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		void EndToEndTestUtils.clearLocalStorage();
		EndToEndTestUtils.deleteDirectoryContent('./e2e/e2e_tests');
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(
			jasmine.objectContaining({
				level: logging.Level.SEVERE
			} as logging.Entry)
		);
	});
});
