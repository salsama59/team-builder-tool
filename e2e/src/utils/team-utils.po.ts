import { AppPage } from './app.po';
import { EndToEndTestUtils } from './end-to-end-test-utils.po';
import { Team } from '../../../src/app/models/team.model';

export class TeamUtilsPageObject {
	public static async createTeam(
		page: AppPage,
		teamToCreate: Team
	): Promise<void> {
		await EndToEndTestUtils.clickOnPageElement(page.getHeaderTeamsTabElement());

		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementCreateButton()
		);

		const newTeamFullName = teamToCreate.teamFullName;
		const newTeamShortName = teamToCreate.teamShortName;

		EndToEndTestUtils.inputTextInFieldElement(
			newTeamFullName,
			page.getTeamElementFormFullNameField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			newTeamShortName,
			page.getTeamElementFormShortNameField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(page.getTeamElementViewForm());

		await EndToEndTestUtils.clickOnPageElement(
			page.getTeamElementFormSubmitButton()
		);

		await EndToEndTestUtils.scrollToElement(page.getTeamElementCreateButton());
	}
}
