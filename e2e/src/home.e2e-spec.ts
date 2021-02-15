import { AppPage } from './utils/app.po';
import { browser, logging } from 'protractor';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';

describe('Team builder home section', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it('should activate the home tab by default', async () => {
    await page.navigateTo();
    expect(await EndToEndTestUtils.isElementHasClass(page.getHeaderHomeTabElement(), 'active'));
  });

  it('should display the home view when the Home tab is clicked', async () => {
    await page.navigateTo();
    EndToEndTestUtils.clickOnPageElement(page.getHeaderHomeTabElement());
    expect(await page.getHomeFeatureCardElement('team-feature-element').isPresent());
  });

  it('should display the teams view when the teams feature button is clicked', async () => {
    await page.navigateTo();
    EndToEndTestUtils.clickOnPageElement(page.getHeaderHomeTabElement());
    expect(await page.getHomeFeatureCardElement('team-feature-element').isPresent());
    EndToEndTestUtils.clickOnPageElement(page.getHomeFeatureButtonElement('team-feature-element'));
    expect(await page.getTeamListElement().isPresent());
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});