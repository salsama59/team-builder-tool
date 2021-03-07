import { Component, OnInit } from '@angular/core';

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
	 * Copyright date of footer component containing the current year.
	 */
	public copyrightDate: string = '';

	/**
	 * Initialize the copyright date for display purpose.
	 */
	ngOnInit(): void {
		const todayDate: Date = new Date();
		this.copyrightDate = todayDate.getFullYear().toString();
	}
}
