import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
	let footerComponent: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FooterComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FooterComponent);
		footerComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(footerComponent).toBeTruthy();
	});

	it('should calculate the current year on intialization', () => {
		expect(footerComponent.copyrightDate).toEqual(
			new Date().getFullYear().toString()
		);
	});

	it('should display the copyright', () => {
		const currentYear: string = new Date().getFullYear().toString();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('#app-copyright').textContent).toContain(
			'© Copyright ' + currentYear
		);
	});
});
