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

	getTeamElementDeleteButton(teamId: number): ElementFinder {
		return element(
			by.css(
				'app-teams div div div div div ul#team-list > li div div div button#delete-team-button-id-' +
					teamId.toString()
			)
		);
	}

	getTeamElementCreateButton(): ElementFinder {
		return element(by.css('app-teams div a#new-team-button-id'));
	}

	getPlayerElementViewButton(playerId: number): ElementFinder {
		return element(
			by.css(
				'app-players div div div div div ul#player-list > li div div div button#view-player-button-id-' +
					playerId.toString()
			)
		);
	}

	getPlayerElementEditButton(playerId: number): ElementFinder {
		return element(
			by.css(
				'app-players div div div div div ul#player-list > li div div div button#edit-player-button-id-' +
					playerId.toString()
			)
		);
	}

	getPlayerElementDeleteButton(playerId: number): ElementFinder {
		return element(
			by.css(
				'app-players div div div div div ul#player-list > li div div div button#delete-player-button-id-' +
					playerId.toString()
			)
		);
	}

	getPlayerElementCreateButton(): ElementFinder {
		return element(by.css('app-players div a#new-player-button-id'));
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

	getTeamElementFormFullNameRequiredErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-team form div span#teamFullNameRequiredErrorMessage')
		);
	}

	getTeamElementFormShortNameField(): ElementFinder {
		return element(by.css('app-team form div input#teamShortNameFormInput'));
	}

	getTeamElementFormShortNameRequiredErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-team form div span#teamShortNameRequiredErrorMessage')
		);
	}

	getTeamElementFormShortNameMaxLengthErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-team form div span#teamShortNameMaxLengthErrorMessage')
		);
	}

	getTeamElementFormSubmitButton(): ElementFinder {
		return element(by.css('app-team form button#teamSubmitButton'));
	}

	getTeamElementFormCancelButton(): ElementFinder {
		return element(by.css('app-team form button#teamCancelButton'));
	}

	getPlayerElementFormPlayerIdField(): ElementFinder {
		return element(by.css('app-player form div input#playerIdFormInput'));
	}

	getPlayerElementFormPlayerIdRequiredErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerIdRequiredErrorMessage')
		);
	}

	getPlayerElementFormPlayerTeamIdField(): ElementFinder {
		return element(by.css('app-player form div input#playerTeamIdFormInput'));
	}

	getPlayerElementFormPlayerTeamIdRequiredErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerTeamIdRequiredErrorMessage')
		);
	}

	getPlayerElementFormPlayerTeamIdPlayerTeamIdNotExistsErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerTeamIdNotExistsErrorMessage')
		);
	}

	getPlayerElementFormPlayerStatusIdField(): ElementFinder {
		return element(by.css('app-player form div input#playerStatusIdFormInput'));
	}

	getPlayerElementFormPlayerStatusIdRequiredErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerStatusIdRequiredErrorMessage')
		);
	}

	getPlayerElementFormPlayerStatusIdPlayerStatusIdNotExistsErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerStatusIdNotExistsErrorMessage')
		);
	}

	getPlayerElementFormPlayerAbilityIdField(): ElementFinder {
		return element(
			by.css('app-player form div input#playerAbilityIdFormInput')
		);
	}

	getPlayerElementFormPlayerAbilityIdRequiredErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerAbilityIdRequiredErrorMessage')
		);
	}

	getPlayerElementFormPlayerFirstNameField(): ElementFinder {
		return element(
			by.css('app-player form div input#playerFirstNameFormInput')
		);
	}

	getPlayerElementFormPlayerFirstNameRequiredErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerFirstNameRequiredErrorMessage')
		);
	}

	getPlayerElementFormPlayerLastNameField(): ElementFinder {
		return element(by.css('app-player form div input#playerLastNameFormInput'));
	}

	getPlayerElementFormPlayerLastNameRequiredErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerLastNameRequiredErrorMessage')
		);
	}

	getPlayerElementFormPlayerUniformNumberField(): ElementFinder {
		return element(
			by.css('app-player form div input#playerUniformNumberFormInput')
		);
	}

	getPlayerElementFormPlayerUniformNumberRequiredErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerUniformNumberRequiredErrorMessage')
		);
	}

	getPlayerElementFormPlayerUniformNumberMinLengthErrorMessageBloc(): ElementFinder {
		return element(
			by.css(
				'app-player form div span#playerUniformNumberMinLengthErrorMessage'
			)
		);
	}

	getPlayerElementFormPlayerUniformNumberMaxLengthErrorMessageBloc(): ElementFinder {
		return element(
			by.css(
				'app-player form div span#playerUniformNumberMaxLengthErrorMessage'
			)
		);
	}

	getPlayerElementFormPlayerUniformNumberPatternErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerUniformNumberPatternErrorMessage')
		);
	}

	getPlayerElementFormPlayerUniformNumberUniqueErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerUniformNumberUniqueErrorMessage')
		);
	}

	getPlayerElementFormPlayerFieldPositionField(): ElementFinder {
		return element(
			by.css('app-player form div select#playerFieldPositionFormInput')
		);
	}

	getPlayerElementFormPlayerFieldPositionListElement(
		elementIndex: number
	): ElementFinder {
		return element
			.all(
				by.css('app-player form div select#playerFieldPositionFormInput option')
			)
			.get(elementIndex);
	}

	getPlayerElementFormPlayerFieldPositionRequiredErrorMessageBloc(): ElementFinder {
		return element(
			by.css('app-player form div span#playerFieldPositionRequiredErrorMessage')
		);
	}

	getPlayerElementFormDefaultPlayerFieldPositionField(): ElementFinder {
		return element(
			by.css('app-player form div select#defaultPlayerFieldPositionFormInput')
		);
	}

	getPlayerElementFormDefaultPlayerFieldPositionListElement(
		elementIndex: number
	): ElementFinder {
		return element
			.all(
				by.css(
					'app-player form div select#defaultPlayerFieldPositionFormInput option'
				)
			)
			.get(elementIndex);
	}

	getPlayerElementFormSubmitButton(): ElementFinder {
		return element(by.css('app-player form button#playerSubmitButton'));
	}

	getPlayerElementFormCancelButton(): ElementFinder {
		return element(by.css('app-player form button#playerCancelButton'));
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
