import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Team } from '../models/team.model';
import { TeamsComponent } from './teams.component';
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { HomeComponent } from '../home/home.component';

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
            path: ''
            , component: HomeComponent
          },
          {
            path: 'teams'
            , component: TeamsComponent
            , children: [{ path: ':teamId', component: TeamComponent }]
          }
        ])
      ],
      declarations: [TeamsComponent, TeamComponent, HomeComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            params: of({}),
            queryParams: of({}),
            snapshot: { params: { teamId: '0' } },
            url: of([new UrlSegment('/', {}), new UrlSegment('teams', { teamId: '0' })]),
            fragment: of('/teams')
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
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

  it('should posses 3 teams in it list', () => {
    expect(teamsComponent.teams).toBeDefined();
    expect(teamsComponent.teams).toHaveSize(4);
  });

  it('should render the team list header', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h5#teams-list-header').textContent).toContain('Teams');
  });

  it('should render a team full name in the list', () => {
    const compiled = fixture.nativeElement;
    const index: number = 0;
    if (teamsComponent.teams) {
      expect(compiled.querySelector('div#team-element-' + index).textContent).toContain(teamsComponent.teams[index].teamFullName);
    }
  });

  it('should render a new team buton', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a#new-team-buton-id').textContent).toContain("Add a new team");
  });

  it('should navigate to view team section', () => {
    const spy = spyOn(router, 'navigate');
    teamsComponent.onViewTeamElement(0);
    expect(spy).toHaveBeenCalledWith([0], { relativeTo: activatedRoute });
  });

});
