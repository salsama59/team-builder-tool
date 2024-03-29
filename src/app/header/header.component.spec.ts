import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let headerComponent: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent],
			imports: [RouterTestingModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		headerComponent = fixture.componentInstance;
		headerComponent.headerTitle = 'Teams builder tool';
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(headerComponent).toBeTruthy();
	});

	it('should render home tab link', () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('a#home-tab-link').textContent).toContain(
			'Home'
		);
	});

	it('should render teams tab link', () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('a#teams-tab-link').textContent).toContain(
			'Teams'
		);
	});

	it('should render players tab link', () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('a#players-tab-link').textContent).toContain(
			'Players'
		);
	});

	it('should render status tab link', () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('a#statuses-tab-link').textContent).toContain(
			'Status'
		);
	});

	it('should render exports tab link', () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('a#exportsTabLink').textContent).toContain(
			'Exports'
		);
	});

	it('should render the app title in the nav bar', () => {
		const compiled = fixture.nativeElement;
		expect(
			compiled.querySelector('nav div.navbar-brand').textContent
		).toContain(headerComponent.headerTitle);
	});
});
