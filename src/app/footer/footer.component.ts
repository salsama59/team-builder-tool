import { Component, OnInit } from '@angular/core';
import { version } from '../../../package.json';

/**
 * Class representing the footer component.
 * @implements OnInit
 */
@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	/**
	 * Copyright date of footer component containing the start year.
	 */
	public copyrightStartDate: string = '2021';

	/**
	 * Copyright current date of footer component containing the current year.
	 */
	public copyrightCurrentDate: string = '';

	/**
	 * Application version of footer component
	 */
	public applicationVersion: string = version;

	/**
	 * Developer name of footer component
	 */
	public developerName: string = 'Saül YEPONDE';

	/**
	 * Initialize the copyright date for display purpose.
	 */
	ngOnInit(): void {
		const todayDate: Date = new Date();
		this.copyrightCurrentDate = todayDate.getFullYear().toString();
	}

	/**
	 * Gets copyrigth date display value
	 * @returns the copyrigth sentence
	 */
	getCopyrigthSentenceDisplay(): string {
		let displayResult: string;

		if (this.copyrightStartDate === this.copyrightCurrentDate) {
			displayResult = this.copyrightCurrentDate;
		} else {
			displayResult = this.copyrightStartDate + '-' + this.copyrightCurrentDate;
		}

		return displayResult;
	}
}
