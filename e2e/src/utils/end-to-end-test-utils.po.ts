import { ElementFinder, browser, Key, promise } from 'protractor';
import fs from 'fs';

export interface ILocation {
	x: number;
	y: number;
}

export class EndToEndTestUtils {
	public static async getElementValueAttribute(
		element: ElementFinder
	): Promise<string> {
		return element.getAttribute('value');
	}

	public static async getElementContentText(
		element: ElementFinder
	): Promise<string> {
		return element.getText();
	}

	public static async clickOnPageElement(
		element: ElementFinder
	): Promise<void> {
		await element.click();
	}

	public static clearInputTextElement(element: ElementFinder): void {
		void element.sendKeys(Key.chord(Key.CONTROL, 'a'));
		void element.sendKeys(Key.BACK_SPACE);
		void element.clear();
	}

	public static async isElementHasClass(
		element: ElementFinder,
		searchedClass: string
	): Promise<boolean> {
		return element.getAttribute('class').then((result) => {
			return result.includes(searchedClass);
		});
	}

	public static inputTextInFieldElement(
		input: string,
		element: ElementFinder,
		hasTobeCleared: boolean
	): void {
		if (hasTobeCleared) {
			EndToEndTestUtils.clearInputTextElement(element);
		}
		void element.sendKeys(input);
	}

	public static scrollToElement(
		element: ElementFinder
	): promise.Promise<unknown> {
		return browser.executeScript((element: Element) => {
			element.scrollIntoView(false);
			return true;
		}, element);
	}

	public static async dragAndDropElement(
		element: ElementFinder,
		offset: ILocation
	): Promise<void> {
		await browser.actions().dragAndDrop(element, offset).mouseUp().perform();
	}

	public static async clearLocalStorage(): Promise<void> {
		await browser.executeScript('window.localStorage.clear()');
	}

	public static deleteDirectoryContent(directoryPath: string): void {
		let files: Array<string> = new Array<string>();
		try {
			files = fs.readdirSync(directoryPath);
		} catch (e) {
			console.log(e);
			return;
		}
		if (files.length > 0) {
			for (let i: number = 0; i < files.length; i++) {
				const fileName: string = files[i];
				const filePath: string = directoryPath + '/' + fileName;
				if (fs.statSync(filePath).isFile()) {
					fs.unlinkSync(filePath);
				} else {
					//Recursive call to remove sub files and folders because it is a folder
					EndToEndTestUtils.deleteDirectoryContent(filePath);
				}
			}
		}

		fs.rmdirSync(directoryPath);
	}

	public static createNotExistingDirectory(directoryPath: string): void {
		if (!fs.existsSync(directoryPath)) {
			fs.mkdirSync(directoryPath, { recursive: true });
		}
	}
}
