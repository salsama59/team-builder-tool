import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

/**
 * This class represent the home component
 */
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
	constructor(private elRef: ElementRef) {}

	ngAfterViewInit() {
		const link = this.elRef.nativeElement.querySelector('#redirectIntent');
		console.log('Before set timeout');
		setTimeout(() => {
			console.log('Before redirect');
			link.click();
			console.log('After redirect');
		}, 5000);
		console.log('After set timeout');
	}
	ngOnInit(): void {
		//this.onRedirectAfterSometimesToStore();
		console.log('Init');
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
