import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * This class represent the home component
 */
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
	public isReadyForRedirect: Subject<boolean> = new Subject<boolean>();
	public link: any;
	constructor(private elRef: ElementRef) {}

	ngAfterViewInit(): void {
		this.link = this.elRef.nativeElement.querySelector('#redirectIntent');
		console.log('Before set timeout');
		setTimeout(() => {
			console.log('Before new subject value change');
			this.isReadyForRedirect.next(true);
			console.log('After new subject value change');
		}, 5000);
		console.log('After set timeout');
	}
	ngOnInit(): void {
		//this.onRedirectAfterSometimesToStore();

		this.isReadyForRedirect.subscribe((isReady: boolean) => {
			console.log('Subject value change detected');
			if (isReady) {
				this.link.click();
			}
		});
		console.log('Init');
	}
	onRedirectToStore(): void {
		window.location.href =
			'market://details?id=fr.oney.mobile.mescomptes&hl=fr&gl=US';
	}

	onRedirectAfterSometimesToStore(): void {
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
