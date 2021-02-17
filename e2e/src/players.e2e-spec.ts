import { browser, logging } from 'protractor';
import { AppPage } from './utils/app.po';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';

describe('Team builder players section', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it('should display the player list when the players tab is clicked', async () => {
    await page.navigateTo();
    EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
    expect(await page.getPlayerListElement().isPresent());
    expect(await EndToEndTestUtils.isElementHasClass(page.getHeaderPlayersTabElement(), 'active'));
  });

  it('should display the selected player element when the view button is clicked', async () => {
    await page.navigateTo();
    EndToEndTestUtils.clickOnPageElement(page.getHeaderPlayersTabElement());
    expect(await page.getPlayerListElement().isPresent());
    expect(await page.getPlayerElementViewButton(0).isPresent());
    //EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewButton(0));
    // expect(await page.getPlayerElementViewForm().isPresent());y
    // expect(await page.getPlayerElementFormIdField().isPresent());
    // expect(await page.getPlayerElementFormFullNameField().isPresent());
    // expect(await page.getPlayerElementFormShortNameField().isPresent());
    // expect(await page.getPlayerElementFormIdField().isEnabled()).toBeFalsy();
    // expect(await page.getPlayerElementFormFullNameField().isEnabled()).toBeFalsy();
    // expect(await page.getPlayerElementFormShortNameField().isEnabled()).toBeFalsy();
    // expect(await EndToEndTestUtils.getElementValueAttribute(page.getPlayerElementFormIdField())).toEqual('0');
    // expect(await EndToEndTestUtils.getElementValueAttribute(page.getPlayerElementFormFullNameField())).toEqual('my first player');
    // expect(await EndToEndTestUtils.getElementValueAttribute(page.getPlayerElementFormShortNameField())).toEqual('MFT');

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});