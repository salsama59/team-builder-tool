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

	/**
	 * Team id sequence of teams service
	 */
	private teamIdSequence: number = -1;

	/**
	 * Creates an instance of teams service.
	 * Try to get the team list from the local storage, if there is datas updates the team list.
	 * @param localStorageService the local storage service
	 */
	constructor(private localStorageService: LocalStorageService) {
		const teamsStringData: string | null = this.localStorageService.getData(
			LocalStorageConstants.TEAMS_DATA_KEY
		);
		if (teamsStringData) {
			this.teams = <Array<Team>>JSON.parse(teamsStringData);
		}

		const currentSequenceNumber:
			| string
			| null = this.localStorageService.getData(
			LocalStorageConstants.TEAM_ID_SEQUENCE_KEY
		);

		if (currentSequenceNumber) {
			this.teamIdSequence = +currentSequenceNumber;
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
		const nextTeamId: number = this.getNextTeamIdSequence();
		teamToAdd.teamId = nextTeamId;
		this.teams.push(teamToAdd);
		this.teamsChanged.next(this.getTeams());
		this.setTeamIdSequence(nextTeamId);
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

	/**
	 * Gets next team id sequence
	 * @returns next team id sequence
	 */
	private getNextTeamIdSequence(): number {
		return this.teamIdSequence + 1;
	}

	/**
	 * Sets the team id sequence
	 * @param newSequenceValue the new sequence value to set
	 */
	private setTeamIdSequence(newSequenceValue: number): void {
		this.teamIdSequence = newSequenceValue;
		this.localStorageService.setData(
			LocalStorageConstants.TEAM_ID_SEQUENCE_KEY,
			newSequenceValue.toString()
		);
	}
}
