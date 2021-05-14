import { ElementFinder, browser, Key, promise } from 'protractor';

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

	public static clickOnPageElement(element: ElementFinder): void {
		void element
			.click()
			.then()
			.catch((result) => {
				console.log('Click cannot be performed for element');
				console.log(result);
			});
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
		return browser.executeScript((args: Element[]) => {
			args[0].scrollIntoView();
			return true;
		}, element.getWebElement());
	}

	public static dragAndDropElement(
		element: ElementFinder,
		offset: ILocation
	): promise.Promise<void> {
		return browser.actions().dragAndDrop(element, offset).mouseUp().perform();
	}
}
