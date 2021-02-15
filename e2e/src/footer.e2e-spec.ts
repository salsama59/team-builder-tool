import { AppPage } from './utils/app.po';
import { browser, logging } from 'protractor';
import { EndToEndTestUtils } from './utils/end-to-end-test-utils.po';

describe('Team builder footer section', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it('should display the copyright', async () => {
    await page.navigateTo();
    const currentYear: string = new Date().getFullYear().toString();
    expect(await EndToEndTestUtils.getElementContentText(page.getFooterCopyrightElement('app-copyright'))).toEqual('© Copyright ' + currentYear);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});