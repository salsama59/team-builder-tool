import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';
import { LocalStorageService } from '../services/local-storage.service';
import { TeamsService } from '../services/teams.service';

@Injectable({
	providedIn: 'root'
})
export class MockTeamsService extends TeamsService {
	/**
	 * The team list.
	 * @type {Array<Team>}
	 * @protected
	 */
	protected teams: Array<Team> = [
		new Team(0, 'my first team', 'MFT'),
		new Team(1, 'my second team', 'MST'),
		new Team(2, 'my third team', 'MTT'),
		new Team(3, 'my fourth team', 'MFTHT')
	];

	constructor(localStorageService: LocalStorageService) {
		super(localStorageService);
	}
}
