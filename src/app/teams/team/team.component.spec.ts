import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Team } from 'src/app/models/team.model';

import { TeamComponent } from './team.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('TeamComponent', () => {
  let teamComponent: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    teamComponent = fixture.componentInstance;
    teamComponent.currentTeam = new Team(0, 'Full name', "FN");
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

  it('should render the team form with values from current team', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('#teamIdFormInput')).nativeElement.value).toContain(teamComponent.currentTeam?.teamId);
    expect(compiled.query(By.css('#teamFullNameFormInput')).nativeElement.value).toContain(teamComponent.currentTeam?.teamFullName);
    expect(compiled.query(By.css('#teamShortNameFormInput')).nativeElement.value).toContain(teamComponent.currentTeam?.teamShortName);
  });

  it('should render the team form in disabled state', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('#teamIdFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#teamFullNameFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#teamShortNameFormInput')).nativeElement.disabled).toBeTruthy();
  });
});
