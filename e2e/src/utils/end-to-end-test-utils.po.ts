import { ElementFinder } from 'protractor';

export class EndToEndTestUtils {

    public static async getElementValueAttribute(element: ElementFinder): Promise<string> {
        return element.getAttribute('value');
    }

    public static async getElementContentText(element: ElementFinder): Promise<string> {
        return element.getText();
    }

    public static clickOnPageElement(element: ElementFinder): void {
        element.click();
    }

}