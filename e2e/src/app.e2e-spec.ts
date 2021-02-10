import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Team builder App default page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it('should display the app title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Teams builder tool');
  });

  it('should display the home tab', async () => {
    await page.navigateTo();
    expect(await page.getHeaderHomeTabContentText()).toEqual('Home');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});


describe('Team builder teams page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it('should display the teams tab', async () => {
    await page.navigateTo();
    expect(await page.getHeaderTeamsTabContentText()).toEqual('Teams');
  });

  it('should display the team list when the teams tab is clicked', async () => {
    await page.navigateTo();
    page.clickOnPageElement(page.getHeaderTeamsTabElement());
    expect(await page.getTeamListElement().isPresent());
  });

  it('should display the selected team element when the view button is clicked', async () => {
    await page.navigateTo();
    page.clickOnPageElement(page.getHeaderTeamsTabElement());
    expect(await page.getTeamListElement().isPresent());
    page.clickOnPageElement(page.getTeamElementViewButton(0));
    expect(await page.getTeamElementViewForm().isPresent());
    expect(await page.getTeamElementFormIdField().isPresent());
    expect(await page.getTeamElementFormFullNameField().isPresent());
    expect(await page.getTeamElementFormShortNameField().isPresent());
    expect(await page.getTeamElementFormIdField().isEnabled()).toBeFalsy();
    expect(await page.getTeamElementFormFullNameField().isEnabled()).toBeFalsy();
    expect(await page.getTeamElementFormShortNameField().isEnabled()).toBeFalsy();
    expect(await page.getElementValueAttribute(page.getTeamElementFormIdField())).toEqual('0');
    expect(await page.getElementValueAttribute(page.getTeamElementFormFullNameField())).toEqual('my first team');
    expect(await page.getElementValueAttribute(page.getTeamElementFormShortNameField())).toEqual('MFT');

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
