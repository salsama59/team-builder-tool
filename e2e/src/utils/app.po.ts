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

  getHeaderPlayersTabElement(): ElementFinder {
    return element(by.css('app-header nav div ul li a#players-tab-link'));
  }

  getTeamListElement(): ElementFinder {
    return element(by.css('app-teams div div div div div ul#team-list'));
  }

  getPlayerListElement(): ElementFinder {
    return element(by.css('app-players div div div div div ul#player-list'));
  }

  getTeamElementViewButton(teamId: number): ElementFinder {
    return element(by.css('app-teams div div div div div ul#team-list > li div div div button#view-team-button-id-' + teamId));
  }

  getPlayerElementViewButton(playerId: number): ElementFinder {
    return element(by.css('app-players div div div div div ul#player-list > li div div div button#view-player-button-id-' + playerId));
  }

  getTeamElementViewForm(): ElementFinder {
    return element(by.css('app-team form'));
  }

  getPlayerElementViewForm(): ElementFinder {
    return element(by.css('app-player form'));
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

  getPlayerElementFormPlayerIdField(): ElementFinder {
    return element(by.css('app-player form div input#playerIdFormInput'));
  }

  getPlayerElementFormPlayerTeamIdField(): ElementFinder {
    return element(by.css('app-player form div input#playerTeamIdFormInput'));
  }

  getPlayerElementFormPlayerStatusIdField(): ElementFinder {
    return element(by.css('app-player form div input#playerStatusIdFormInput'));
  }

  getPlayerElementFormPlayerAbilityIdField(): ElementFinder {
    return element(by.css('app-player form div input#playerAbilityIdFormInput'));
  }

  getPlayerElementFormPlayerNameField(): ElementFinder {
    return element(by.css('app-player form div input#playerNameFormInput'));
  }

  getPlayerElementFormPlayerFieldPositionField(): ElementFinder {
    return element(by.css('app-player form div input#playerFieldPositionFormInput'));
  }

  getPlayerElementFormDefaultPlayerFieldPositionField(): ElementFinder {
    return element(by.css('app-player form div input#defaultPlayerFieldPositionFormInput'));
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
