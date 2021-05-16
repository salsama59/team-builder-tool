import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageConstants } from '../constants/local-storage-constants';
import { Team } from '../models/team.model';
import { LocalStorageService } from './local-storage.service';

/**
 * This class represent the teams service providing various operation over the team resource.
 */
@Injectable({
	providedIn: 'root'
})
export class TeamsService {
	/**
	 * The team list.
	 * @type {Array<Team>}
	 * @protected
	 */
	protected teams: Array<Team> = new Array<Team>();

	/**
	 * Teams changed event
	 */
	public teamsChanged: Subject<Array<Team>> = new Subject<Array<Team>>();

	constructor(private localStorageService: LocalStorageService) {
		const teamsStringData: string | null = this.localStorageService.getData(
			LocalStorageConstants.TEAMS_DATA_KEY
		);
		if (teamsStringData) {
			this.teams = <Array<Team>>JSON.parse(teamsStringData);
		}
	}

	/**
	 * Get a team given an id
	 * @param teamId the team id to get
	 * @returns a team corresponding to the id.
	 */
	getTeamById(teamId: number): Team | null {
		const resultTeam: Team | undefined = this.teams.find(
			(team) => team.teamId === teamId
		);
		return resultTeam ? resultTeam : null;
	}

	/**
	 * Get the team list
	 * @returns a team list
	 */
	getTeams(): Array<Team> {
		return this.teams.slice();
	}

	/**
	 * Add a team to the team list
	 * @param teamToAdd the team element to add
	 */
	addTeam(teamToAdd: Team): void {
		const nextTeamId = this.teams.length;
		teamToAdd.teamId = nextTeamId;
		this.teams.push(teamToAdd);
		this.teamsChanged.next(this.getTeams());
	}

	/**
	 * Update a team with the given informations as parameter.
	 * @param teamToUpdate the team information which must be used to update the target team.
	 * @returns the team updated.
	 */
	updateTeam(teamToUpdate: Team): Team {
		this.teams[teamToUpdate.teamId] = teamToUpdate;
		this.teamsChanged.next(this.getTeams());
		return this.teams[teamToUpdate.teamId];
	}

	/**
	 * Delete a team given an id
	 * @param teamIdToDelete the team id to delete.
	 */
	deleteTeamById(teamIdToDelete: number): void {
		this.teams.splice(teamIdToDelete, 1);
		this.teamsChanged.next(this.getTeams());
	}
}
