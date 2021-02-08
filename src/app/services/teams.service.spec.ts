import { TestBed } from '@angular/core/testing';
import { Team } from '../models/team.model';

import { TeamsService } from './teams.service';

describe('TeamsService', () => {
  let service: TeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of team', () => {
    expect(service.getTeams().length).toBeCloseTo(4);
  });

  it('should return a team element', () => {
    expect(service.getTeamById(0)).toEqual(new Team(0, 'my first team', 'MFT'));
  });

  it('should add a new team element', () => {
    const newAddedTeam: Team = new Team(4, 'my fifth team', 'MFTHT');
    service.addTeam(newAddedTeam);
    expect(service.getTeams().length).toBeCloseTo(5);
    expect(service.getTeams()).toContain(newAddedTeam);
  });

  it('should delete a team element', () => {
    service.deleteTeamById(0);
    expect(service.getTeams().length).toBeCloseTo(3);
    expect(service.getTeams()).not.toContain(new Team(0, 'my first team', 'MFT'));
  });
});
