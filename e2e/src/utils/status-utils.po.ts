import { AppPage } from './app.po';
import { Status } from '../../../src/app/models/status.model';
import { EndToEndTestUtils } from './end-to-end-test-utils.po';

export class StatusUtilsPageObject {
	public static async createStatus(
		page: AppPage,
		statusToCreate: Status
	): Promise<void> {
		await EndToEndTestUtils.clickOnPageElement(
			page.getHeaderStatusesTabElement()
		);

		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementCreateButton()
		);

		EndToEndTestUtils.inputTextInFieldElement(
			statusToCreate.playerId.toString(),
			page.getStatusElementFormPlayerIdField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(page.getStatusElementViewForm());

		EndToEndTestUtils.inputTextInFieldElement(
			statusToCreate.profileName,
			page.getStatusElementFormProfileNameField(),
			true
		);

		await EndToEndTestUtils.clickOnPageElement(
			page.getStatusElementFormSubmitButton()
		);

		await EndToEndTestUtils.scrollToElement(
			page.getStatusElementCreateButton()
		);
	}
}
