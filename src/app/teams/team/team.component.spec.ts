import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponent } from './team.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamsComponent } from '../teams.component';
import { Location } from '@angular/common';

describe('TeamComponent', () => {
	let teamComponent: TeamComponent;
	let fixture: ComponentFixture<TeamComponent>;
	let router: Router;
	let activatedRoute: ActivatedRoute;
	let location: Location;

	describe('Generic behaviour', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'teams',
							component: TeamsComponent,
							children: [{ path: ':teamId/:mode', component: TeamComponent }]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ teamId: '0', mode: 'view' }),
							queryParams: of({}),
							snapshot: { params: { teamId: '0', mode: 'view' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('teams', { teamId: '0', mode: 'view' })
							]),
							fragment: of('/teams')
						}
					}
				],
				declarations: [TeamComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(TeamComponent);
			teamComponent = fixture.componentInstance;
			router = TestBed.inject(Router);
			activatedRoute = TestBed.inject(ActivatedRoute);
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(teamComponent).toBeTruthy();
		});

		it(`should have a current team property populated`, () => {
			expect(teamComponent.currentTeam).toBeDefined();
			expect(teamComponent.currentTeam?.teamFullName).toBeDefined();
			expect(teamComponent.currentTeam?.teamId).toBeDefined();
			expect(teamComponent.currentTeam?.teamShortName).toBeDefined();
		});
	});

	describe('view mode', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'teams',
							component: TeamsComponent,
							children: [{ path: ':teamId/:mode', component: TeamComponent }]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ teamId: '0', mode: 'view' }),
							queryParams: of({}),
							snapshot: { params: { teamId: '0', mode: 'view' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('teams', { teamId: '0', mode: 'view' })
							]),
							fragment: of('/teams')
						}
					}
				],
				declarations: [TeamComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(TeamComponent);
			teamComponent = fixture.componentInstance;
			router = TestBed.inject(Router);
			activatedRoute = TestBed.inject(ActivatedRoute);
			fixture.detectChanges();
		});

		it('should render the team form with values from current team during view mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#teamIdFormInput')).nativeElement.value
			).toContain(teamComponent.currentTeam?.teamId);
			expect(
				compiled.query(By.css('#teamFullNameFormInput')).nativeElement.value
			).toContain(teamComponent.currentTeam?.teamFullName);
			expect(
				compiled.query(By.css('#teamShortNameFormInput')).nativeElement.value
			).toContain(teamComponent.currentTeam?.teamShortName);
		});

		it('should render the team form in disabled state during view mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#teamIdFormInput')).nativeElement.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#teamFullNameFormInput')).nativeElement.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#teamShortNameFormInput')).nativeElement.disabled
			).toBeTruthy();
		});
	});

	describe('edit mode', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'teams',
							component: TeamsComponent,
							children: [{ path: ':teamId/:mode', component: TeamComponent }]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ teamId: '0', mode: 'edit' }),
							queryParams: of({}),
							snapshot: { params: { teamId: '0', mode: 'edit' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('teams', { teamId: '0', mode: 'edit' })
							]),
							fragment: of('/teams')
						}
					},
					{
						provide: Location
					}
				],
				declarations: [TeamComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(TeamComponent);
			teamComponent = fixture.componentInstance;
			router = TestBed.inject(Router);
			activatedRoute = TestBed.inject(ActivatedRoute);
			location = TestBed.inject(Location);
			fixture.detectChanges();
		});

		it('should render the team form with values from current team during edit mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.nativeElement.querySelector('#teamFullNameFormInput').value
			).toContain(teamComponent.currentTeam?.teamFullName);
			expect(
				compiled.nativeElement.querySelector('#teamShortNameFormInput').value
			).toContain(teamComponent.currentTeam?.teamShortName);
		});

		it('should render the team form in enabled state during edit mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.nativeElement.querySelector('#teamFullNameFormInput').disabled
			).toBeFalsy();
			expect(
				compiled.nativeElement.querySelector('#teamShortNameFormInput').disabled
			).toBeFalsy();
			expect(
				compiled.nativeElement.querySelector('#teamSubmitButton').disabled
			).toBeFalsy();
			expect(
				compiled.nativeElement.querySelector('#teamCancelButton').disabled
			).toBeFalsy();
		});

		it('should return to team list when clicking on save button during edit mode', () => {
			const compiled = fixture.debugElement;
			compiled.nativeElement.querySelector('#teamSubmitButton').click();
			expect(true).toBeTruthy();
		});

		it('should return to team list when clicking on cancel button during edit mode', () => {
			const compiled = fixture.debugElement;
			compiled.nativeElement.querySelector('#teamCancelButton').click();
			expect(true).toBeTruthy();
		});
	});
});
