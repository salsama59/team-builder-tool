import { Component } from '@angular/core';

/**
 * This class represent the home component
 */
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	onRedirectToStore() {
		window.location.href =
			'market://details?id=fr.oney.mobile.mescomptes&hl=fr&gl=US';
	}

	onRedirectAfterSometimesToStore() {
		setTimeout(() => {
			window.location.href =
				'market://details?id=fr.oney.mobile.mescomptes&hl=fr&gl=US';
		}, 5000);
	}
}
