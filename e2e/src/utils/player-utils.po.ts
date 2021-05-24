import { AppPage } from './app.po';
import { EndToEndTestUtils } from './end-to-end-test-utils.po';
import { Player } from '../../../src/app/models/player.model';
import { PlayerFieldPositionEnum } from '../../../src/app/enums/player-field-position.enum';

export class PlayerUtilsPageObject {
	public static async createPlayer(
		page: AppPage,
		playerToCreate: Player
	): Promise<void> {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderPlayersTabElement()
		);
		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementCreateButton()
		);
		EndToEndTestUtils.inputTextInFieldElement(
			playerToCreate.playerTeamId.toString(),
			page.getPlayerElementFormPlayerTeamIdField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			playerToCreate.playerStatusId.toString(),
			page.getPlayerElementFormPlayerStatusIdField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			playerToCreate.playerAbilityId.toString(),
			page.getPlayerElementFormPlayerAbilityIdField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			playerToCreate.playerFirstName.toString(),
			page.getPlayerElementFormPlayerFirstNameField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			playerToCreate.playerLastName.toString(),
			page.getPlayerElementFormPlayerLastNameField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			playerToCreate.playerUniformNumber.toString(),
			page.getPlayerElementFormPlayerUniformNumberField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(page.getPlayerElementViewForm());

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormPlayerFieldPositionField()
		);

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormPlayerFieldPositionListElement(
				PlayerUtilsPageObject.getPlayerFieldPositionEnumIndex(
					playerToCreate.playerFieldPosition
				)
			)
		);

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormDefaultPlayerFieldPositionField()
		);

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormDefaultPlayerFieldPositionListElement(
				PlayerUtilsPageObject.getPlayerFieldPositionEnumIndex(
					playerToCreate.defaultPlayerFieldPosition
				)
			)
		);

		await EndToEndTestUtils.clickOnPageElement(
			page.getPlayerElementFormSubmitButton()
		);

		await EndToEndTestUtils.scrollToElement(
			page.getPlayerElementCreateButton()
		);
	}

	public static getPlayerFieldPositionEnumIndex(
		playerFieldPosition: PlayerFieldPositionEnum
	): number {
		let playerPositionIndex: number = -1;

		for (const value in PlayerFieldPositionEnum) {
			playerPositionIndex++;
			if (value == playerFieldPosition) {
				return playerPositionIndex;
			}
		}
		return playerPositionIndex;
	}
}
