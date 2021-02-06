import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsComponent } from './teams.component';

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should posses 3 teams in it list', () => {
    const teamsComponent = fixture.componentInstance;
    expect(teamsComponent.teams).toBeDefined();
    expect(teamsComponent.teams).toHaveSize(3);
  });

  it('should render the team list header', () => {
    const fixture = TestBed.createComponent(TeamsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h5#teams-list-header').textContent).toContain('Teams');
  });

  it('should render a team full name in the list', () => {
    const fixture = TestBed.createComponent(TeamsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const teamsComponent = fixture.componentInstance;
    const index: number = 0;
    expect(compiled.querySelector('a#team-element-' + index).textContent).toContain(teamsComponent.teams[index].teamFullName);
  });

  it('should render a new team buton', () => {
    const fixture = TestBed.createComponent(TeamsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a#new-team-buton-id').textContent).toContain("Add a new team");
  });
});
