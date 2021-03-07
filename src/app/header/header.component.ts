import { Component, Input } from '@angular/core';

/**
 * Class representing the header component
 */
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	/**
	 * The header title.
	 * @type {string}
	 * @public
	 */
	@Input()
	headerTitle: string = '';
}
