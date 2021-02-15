import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  getTitleElement(): ElementFinder {
    return element(by.css('app-root nav div.navbar-brand'));
  }

  getHeaderHomeTabElement(): ElementFinder {
    return element(by.css('app-header nav div ul li a#home-tab-link'));
  }

  getHeaderTeamsTabElement(): ElementFinder {
    return element(by.css('app-header nav div ul li a#teams-tab-link'));
  }

  getTeamListElement(): ElementFinder {
    return element(by.css('app-teams div div div div div ul#team-list'));
  }

  getTeamElementViewButton(teamId: number): ElementFinder {
    return element(by.css('app-teams div div div div div ul#team-list > li div div div button#view-team-button-id-' + teamId));
  }

  getTeamElementViewForm(): ElementFinder {
    return element(by.css('app-team form'));
  }

  getTeamElementFormIdField(): ElementFinder {
    return element(by.css('app-team form div input#teamIdFormInput'));
  }

  getTeamElementFormFullNameField(): ElementFinder {
    return element(by.css('app-team form div input#teamFullNameFormInput'));
  }

  getTeamElementFormShortNameField(): ElementFinder {
    return element(by.css('app-team form div input#teamShortNameFormInput'));
  }

  getHomeFeatureCardElement(featureElementId: string) {
    return element(by.css('app-home div#' + featureElementId));
  }

  getHomeFeatureButtonElement(featureElementId: string) {
    return element(by.css('app-home div#' + featureElementId + ' div.card-body a'));
  }

  getFooterCopyrightElement(copyrightElementId: string) {
    return element(by.css('app-footer div div#' + copyrightElementId));
  }
}
