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

	getHeaderStatusesTabElement(): ElementFinder {
		return element(by.css('app-header nav div ul li a#statuses-tab-link'));
	}

	getTeamListElement(): ElementFinder {
		return element(by.css('app-teams div div div div div ul#team-list'));
	}

	getPlayerListElement(): ElementFinder {
		return element(by.css('app-players div div div div div ul#player-list'));
	}

	getStatusListElement(): ElementFinder {
		return element(by.css('app-statuses div div div div div ul#status-list'));
	}

	getTeamElementViewButton(teamId: number): ElementFinder {
		return element(
			by.css(
				'app-teams div div div div div ul#team-list > li div div div button#view-team-button-id-' +
					teamId.toString()
			)
		);
	}

	getTeamElementEditButton(teamId: number): ElementFinder {
		return element(
			by.css(
				'app-teams div div div div div ul#team-list > li div div div button#edit-team-button-id-' +
					teamId.toString()
			)
		);
	}

	getPlayerElementViewButton(playerId: number): ElementFinder {
		return element(
			by.css(
				'app-players div div div div div ul#player-list > li div div div button#view-player-button-id-' +
					playerId.toString()
			)
		);
	}

	getStatusElementViewButton(statusId: number): ElementFinder {
		return element(
			by.css(
				'app-statuses div div div div div ul#status-list > li div div div button#view-status-button-id-' +
					statusId.toString()
			)
		);
	}

	getTeamElementViewForm(): ElementFinder {
		return element(by.css('app-team form'));
	}

	getPlayerElementViewForm(): ElementFinder {
		return element(by.css('app-player form'));
	}

	getStatusElementViewForm(): ElementFinder {
		return element(by.css('app-status form'));
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

	getTeamElementFormSubmitButton(): ElementFinder {
		return element(by.css('app-team form button#teamSubmitButton'));
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
		return element(
			by.css('app-player form div input#playerAbilityIdFormInput')
		);
	}

	getPlayerElementFormPlayerNameField(): ElementFinder {
		return element(by.css('app-player form div input#playerNameFormInput'));
	}

	getPlayerElementFormPlayerFieldPositionField(): ElementFinder {
		return element(
			by.css('app-player form div input#playerFieldPositionFormInput')
		);
	}

	getPlayerElementFormDefaultPlayerFieldPositionField(): ElementFinder {
		return element(
			by.css('app-player form div input#defaultPlayerFieldPositionFormInput')
		);
	}

	getStatusElementFormStatusIdField(): ElementFinder {
		return element(by.css('app-status form div input#statusIdFormInput'));
	}

	getStatusElementFormPlayerIdField(): ElementFinder {
		return element(by.css('app-status form div input#playerIdFormInput'));
	}

	getStatusElementFormSpeedField(): ElementFinder {
		return element(by.css('app-status form div input#speedFormInput'));
	}

	getStatusElementFormStaminaField(): ElementFinder {
		return element(by.css('app-status form div input#staminaFormInput'));
	}

	getStatusElementFormCatchEfficiencyField(): ElementFinder {
		return element(
			by.css('app-status form div input#catchEfficiencyFormInput')
		);
	}

	getStatusElementFormPitchEfficiencyField(): ElementFinder {
		return element(
			by.css('app-status form div input#pitchEfficiencyFormInput')
		);
	}

	getStatusElementFormPassEfficiencyField(): ElementFinder {
		return element(by.css('app-status form div input#passEfficiencyFormInput'));
	}

	getStatusElementFormBattingEfficiencyField(): ElementFinder {
		return element(
			by.css('app-status form div input#battingEfficiencyFormInput')
		);
	}

	getStatusElementFormBattingPowerField(): ElementFinder {
		return element(by.css('app-status form div input#battingPowerFormInput'));
	}

	getStatusElementFormPitchingPowerField(): ElementFinder {
		return element(by.css('app-status form div input#pitchingPowerFormInput'));
	}

	getStatusElementFormPitchingEffectField(): ElementFinder {
		return element(by.css('app-status form div input#pitchingEffectFormInput'));
	}

	getHomeFeatureCardElement(featureElementId: string): ElementFinder {
		return element(by.css('app-home div#' + featureElementId));
	}

	getHomeFeatureButtonElement(featureElementId: string): ElementFinder {
		return element(
			by.css('app-home div#' + featureElementId + ' div.card-body a')
		);
	}

	getFooterElement(copyrightElementId: string): ElementFinder {
		return element(by.css('app-footer div div#' + copyrightElementId));
	}
}
