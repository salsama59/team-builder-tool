import { Component, OnInit } from '@angular/core';

/**
 * This class represent the home component
 */
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	ngOnInit(): void {
		this.onRedirectAfterSometimesToStore();
	}
	onRedirectToStore() {
		window.location.href =
			'market://details?id=fr.oney.mobile.mescomptes&hl=fr&gl=US';
	}

	onRedirectAfterSometimesToStore() {
		console.log('Before set timeout');
		setTimeout(() => {
			console.log('Before redirect');
			window.location.href =
				'market://details?id=fr.oney.mobile.mescomptes&hl=fr&gl=US';
			console.log('After redirect');
		}, 5000);
		console.log('After set timeout');
	}
}
