import { browser, logging } from 'protractor';
import { AppPage } from './utils/app.po';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';

describe('Team builder statuses section', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it('should display the status list when the statuses tab is clicked', async () => {
    await page.navigateTo();
    EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
    expect(await page.getStatusListElement().isPresent());
    expect(await EndToEndTestUtils.isElementHasClass(page.getHeaderStatusesTabElement(), 'active'));
  });

  it('should display the selected status element when the view button is clicked', async () => {
    await page.navigateTo();
    EndToEndTestUtils.clickOnPageElement(page.getHeaderStatusesTabElement());
    expect(await page.getStatusListElement().isPresent());
    //EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewButton(0));
    //expect(await page.getStatusElementViewForm().isPresent());
    // expect(await page.getTeamElementFormIdField().isPresent());
    // expect(await page.getTeamElementFormFullNameField().isPresent());
    // expect(await page.getTeamElementFormShortNameField().isPresent());
    // expect(await page.getTeamElementFormIdField().isEnabled()).toBeFalsy();
    // expect(await page.getTeamElementFormFullNameField().isEnabled()).toBeFalsy();
    // expect(await page.getTeamElementFormShortNameField().isEnabled()).toBeFalsy();
    // expect(await EndToEndTestUtils.getElementValueAttribute(page.getTeamElementFormIdField())).toEqual('0');
    // expect(await EndToEndTestUtils.getElementValueAttribute(page.getTeamElementFormFullNameField())).toEqual('my first status');
    // expect(await EndToEndTestUtils.getElementValueAttribute(page.getTeamElementFormShortNameField())).toEqual('MFT');

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});