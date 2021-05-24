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

describe('Team builder home section', () => {
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

	it('should activate the home tab by default', async () => {
		expect(
			await EndToEndTestUtils.isElementHasClass(
				page.getHeaderHomeTabElement(),
				'active'
			)
		);
	});

	it('should display the home view when the Home tab is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderHomeTabElement());
		expect(
			await page.getHomeFeatureCardElement('team-feature-element').isPresent()
		).toBe(true);
		expect(
			await page.getHomeFeatureCardElement('player-feature-element').isPresent()
		).toBe(true);
		expect(
			await page.getHomeFeatureCardElement('status-feature-element').isPresent()
		).toBe(true);
	});

	it('should display the teams view when the teams feature button is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderHomeTabElement());
		expect(
			await page.getHomeFeatureCardElement('team-feature-element').isPresent()
		).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getHomeFeatureButtonElement('team-feature-element')
		);
		expect(await page.getTeamListElement().isPresent()).toBe(true);
	});

	it('should display the players view when the players feature button is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderHomeTabElement());
		expect(
			await page.getHomeFeatureCardElement('player-feature-element').isPresent()
		).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getHomeFeatureButtonElement('player-feature-element')
		);
		expect(await page.getPlayerListElement().isPresent()).toBe(true);
	});

	it('should display the statuses view when the statuses feature button is clicked', async () => {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderHomeTabElement());
		expect(
			await page.getHomeFeatureCardElement('status-feature-element').isPresent()
		).toBe(true);
		await EndToEndTestUtils.clickOnPageElement(
			page.getHomeFeatureButtonElement('status-feature-element')
		);
		expect(await page.getStatusListElement().isPresent()).toBe(true);
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
