import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const appComponent = fixture.componentInstance;
		expect(appComponent).toBeTruthy();
	});

	it(`should have as title 'Teams builder tool'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const appComponent = fixture.componentInstance;
		expect(appComponent.title).toEqual('Teams builder tool');
	});
});
