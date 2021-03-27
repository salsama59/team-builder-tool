import { TestBed } from '@angular/core/testing';
import { Team } from '../models/team.model';

import { TeamsService } from './teams.service';

describe('TeamsService', () => {
	let teamsService: TeamsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		teamsService = TestBed.inject(TeamsService);
	});

	it('should be created', () => {
		expect(teamsService).toBeTruthy();
	});

	it('should return a list of team', () => {
		expect(teamsService.getTeams().length).toBeCloseTo(4);
	});

	it('should return a team element', () => {
		expect(teamsService.getTeamById(0)).toEqual(
			new Team(0, 'my first team', 'MFT')
		);
	});

	it('should add a new team element', () => {
		const newAddedTeam: Team = new Team(4, 'my fifth team', 'MFTHT');
		teamsService.addTeam(newAddedTeam);
		expect(teamsService.getTeams().length).toBeCloseTo(5);
		expect(teamsService.getTeams()).toContain(newAddedTeam);
	});

	it('should delete a team element', () => {
		const teamToBeDeleted: Team = teamsService.getTeamById(0);
		teamsService.deleteTeamById(0);
		expect(teamsService.getTeams().length).toBeCloseTo(3);
		expect(teamsService.getTeams()).not.toContain(teamToBeDeleted);
	});

	it('should update a team element', () => {
		const teamToBeUpdated: Team = teamsService.getTeamById(0);
		teamToBeUpdated.teamFullName = 'Completely random name';
		teamToBeUpdated.teamShortName = 'SHORT';
		teamsService.updateTeam(teamToBeUpdated);
		expect(teamsService.getTeams()).toContain(teamToBeUpdated);
	});
});
