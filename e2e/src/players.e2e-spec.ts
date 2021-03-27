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
    EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewButton(0));
    expect(await page.getPlayerElementViewForm().isPresent());

    expect(await page.getPlayerElementFormPlayerIdField().isPresent());
    expect(await page.getPlayerElementFormPlayerTeamIdField().isPresent());
    expect(await page.getPlayerElementFormPlayerStatusIdField().isPresent());
    expect(await page.getPlayerElementFormPlayerAbilityIdField().isPresent());
    expect(await page.getPlayerElementFormPlayerNameField().isPresent());
    expect(await page.getPlayerElementFormPlayerFieldPositionField().isPresent());
    expect(await page.getPlayerElementFormDefaultPlayerFieldPositionField().isPresent());

    expect(await page.getPlayerElementFormPlayerIdField().isEnabled()).toBeFalsy();
    expect(await page.getPlayerElementFormPlayerTeamIdField().isEnabled()).toBeFalsy();
    expect(await page.getPlayerElementFormPlayerStatusIdField().isEnabled()).toBeFalsy();
    expect(await page.getPlayerElementFormPlayerAbilityIdField().isEnabled()).toBeFalsy();
    expect(await page.getPlayerElementFormPlayerNameField().isEnabled()).toBeFalsy();
    expect(await page.getPlayerElementFormPlayerFieldPositionField().isEnabled()).toBeFalsy();
    expect(await page.getPlayerElementFormDefaultPlayerFieldPositionField().isEnabled()).toBeFalsy();

    expect(await EndToEndTestUtils.getElementValueAttribute(page.getPlayerElementFormPlayerIdField())).toEqual('0');
    expect(await EndToEndTestUtils.getElementValueAttribute(page.getPlayerElementFormPlayerTeamIdField())).toEqual('0');
    expect(await EndToEndTestUtils.getElementValueAttribute(page.getPlayerElementFormPlayerStatusIdField())).toEqual('0');
    expect(await EndToEndTestUtils.getElementValueAttribute(page.getPlayerElementFormPlayerAbilityIdField())).toEqual('0');
    expect(await EndToEndTestUtils.getElementValueAttribute(page.getPlayerElementFormPlayerNameField())).toEqual('Joe');
    expect(await EndToEndTestUtils.getElementValueAttribute(page.getPlayerElementFormPlayerFieldPositionField())).toEqual('CENTER_FIELDER');
    expect(await EndToEndTestUtils.getElementValueAttribute(page.getPlayerElementFormDefaultPlayerFieldPositionField())).toEqual('CENTER_FIELDER');

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});