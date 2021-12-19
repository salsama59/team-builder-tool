import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Team } from '../models/team.model';
import { TeamsComponent } from './teams.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { TeamsService } from '../services/teams.service';
import { MockTeamsService } from '../unit-testing/mock-teams-service';

describe('TeamsComponent', () => {
	let teamsComponent: TeamsComponent;
	let fixture: ComponentFixture<TeamsComponent>;
	let activatedRoute: ActivatedRoute;
	let router: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				CommonModule,
				RouterTestingModule.withRoutes([
					{
						path: 'teams',
						component: TeamsComponent,
						children: [{ path: ':teamId', component: TeamComponent }]
					}
				])
			],
			declarations: [TeamsComponent, TeamComponent],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						params: of({}),
						queryParams: of({}),
						snapshot: { params: { teamId: '0', mode: 'view' } },
						url: of([
							new UrlSegment('/', {}),
							new UrlSegment('teams', { teamId: '0', mode: 'view' })
						]),
						fragment: of('/teams')
					}
				},
				{
					provide: TeamsService,
					useClass: MockTeamsService
				}
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TeamsComponent);
		teamsComponent = fixture.componentInstance;
		router = TestBed.inject(Router);
		activatedRoute = TestBed.inject(ActivatedRoute);
		teamsComponent.teams = [
			new Team(0, 'my first team', 'MFT'),
			new Team(1, 'my second team', 'MST'),
			new Team(2, 'my third team', 'MTT'),
			new Team(3, 'my fourth team', 'MFTHT')
		];
		router.initialNavigation();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(teamsComponent).toBeTruthy();
	});

	it('should init teamsChangedSubscription', () => {
		const teamsService = TestBed.inject(TeamsService);
		expect(teamsComponent.teams).toHaveSize(4);
		teamsService.addTeam(new Team(4, 'test name', 'TN'));
		expect(teamsComponent.teams).toHaveSize(5);
	});

	it('should posses 3 teams in it list', () => {
		expect(teamsComponent.teams).toBeDefined();
		expect(teamsComponent.teams).toHaveSize(4);
	});

	it('should render the team list header', () => {
		const compiled = fixture.nativeElement;
		expect(
			compiled.querySelector('h5#teams-list-header').textContent
		).toContain('Teams');
	});

	it('should render a team full name in the list', () => {
		const compiled = fixture.nativeElement;
		const index: number = 0;
		if (teamsComponent.teams) {
			expect(
				compiled.querySelector('div#team-element-' + index.toString())
					.textContent
			).toContain(teamsComponent.teams[index].teamFullName);
		}
	});

	it('should render a new team button', () => {
		const compiled = fixture.nativeElement;
		expect(
			compiled.querySelector('a#new-team-button-id').textContent
		).toContain('Add a new team');
	});

	it('should navigate to view team section', () => {
		const spy = spyOn(router, 'navigate');
		teamsComponent.onViewTeamElement(0);
		expect(spy).toHaveBeenCalledWith([0, 'view'], {
			relativeTo: activatedRoute,
			queryParamsHandling: 'merge'
		});
	});

	it('should navigate to edit team section', () => {
		const spy = spyOn(router, 'navigate');
		teamsComponent.onEditTeamElement(0);
		expect(spy).toHaveBeenCalledWith([0, 'edit'], {
			relativeTo: activatedRoute,
			queryParamsHandling: 'merge'
		});
	});

	it('should navigate to create team section', () => {
		const spy = spyOn(router, 'navigate');
		teamsComponent.onCreateTeamElement();
		expect(spy).toHaveBeenCalledWith(['create'], {
			relativeTo: activatedRoute,
			queryParamsHandling: 'merge'
		});
	});

	it('should delete the selected team', () => {
		const spy = spyOn(router, 'navigate');
		expect(teamsComponent.teams).toHaveSize(4);
		teamsComponent.onDeleteTeamElement(0);
		expect(teamsComponent.teams).toHaveSize(3);
		expect(spy).toHaveBeenCalledWith(['.'], {
			relativeTo: activatedRoute,
			queryParams: { page: 1 },
			queryParamsHandling: 'merge'
		});
	});

	it('should paginate teams with negative page number', () => {
		teamsComponent.paginateTeams(-1);
		expect(teamsComponent.teams).toHaveSize(0);
	});

	it('should paginate teams with page number greater than total elements', () => {
		teamsComponent.paginateTeams(2);
		expect(teamsComponent.teams).toHaveSize(4);
	});

	it('should paginate teams with new page total equals zero', () => {
		const teamsService = TestBed.inject(TeamsService);
		const teamsCount: number = teamsService.getTeams().length;
		for (let i: number = 0; i < teamsCount; i++) {
			teamsService.deleteTeamById(0);
		}
		teamsComponent.paginateTeams(2);
		expect(teamsComponent.teams).toHaveSize(0);
	});
});

describe('TeamsComponent routed with page number data', () => {
	let teamsComponent: TeamsComponent;
	let fixture: ComponentFixture<TeamsComponent>;
	let router: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				CommonModule,
				RouterTestingModule.withRoutes([
					{
						path: 'teams',
						component: TeamsComponent,
						children: [{ path: ':teamId', component: TeamComponent }]
					}
				])
			],
			declarations: [TeamsComponent, TeamComponent],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						params: of({}),
						queryParams: of({ page: 1 }),
						snapshot: { params: { teamId: '0', mode: 'view' } },
						url: of([
							new UrlSegment('/', {}),
							new UrlSegment('teams', { teamId: '0', mode: 'view' })
						]),
						fragment: of('/teams')
					}
				},
				{
					provide: TeamsService,
					useClass: MockTeamsService
				}
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TeamsComponent);
		teamsComponent = fixture.componentInstance;
		router = TestBed.inject(Router);
		teamsComponent.teams = [
			new Team(0, 'my first team', 'MFT'),
			new Team(1, 'my second team', 'MST'),
			new Team(2, 'my third team', 'MTT'),
			new Team(3, 'my fourth team', 'MFTHT')
		];
		router.initialNavigation();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(teamsComponent).toBeTruthy();
	});
});
