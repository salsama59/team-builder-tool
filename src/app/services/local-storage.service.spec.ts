import { TestBed } from '@angular/core/testing';
import { LocalStorageConstants } from '../constants/local-storage-constants';
import { PlayerFieldPositionEnum } from '../enums/player-field-position.enum';
import { Player } from '../models/player.model';
import { Status } from '../models/status.model';
import { Team } from '../models/team.model';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
	let service: LocalStorageService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LocalStorageService);
	});

	afterEach(() => {
		service.clearAllDatas();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should set the teams data', () => {
		const teams: Array<Team> = new Array<Team>();
		teams.push(new Team(0, 'my first team', 'MFT'));

		service.setData(
			LocalStorageConstants.TEAMS_DATA_KEY,
			JSON.stringify(teams)
		);

		expect(service.getData(LocalStorageConstants.TEAMS_DATA_KEY)).toBeTruthy();
	});

	it('should set the players data', () => {
		const players: Array<Player> = new Array<Player>();
		players.push(
			new Player(
				0,
				0,
				0,
				0,
				'Joe',
				'Stanford',
				'00',
				PlayerFieldPositionEnum.CENTER_FIELDER,
				PlayerFieldPositionEnum.CENTER_FIELDER
			)
		);

		service.setData(
			LocalStorageConstants.PLAYERS_DATA_KEY,
			JSON.stringify(players)
		);

		expect(
			service.getData(LocalStorageConstants.PLAYERS_DATA_KEY)
		).toBeTruthy();
	});

	it('should set the stauses data', () => {
		const statuses: Array<Status> = new Array<Status>();
		statuses.push(
			new Status(0, 0, 'test', 10, 27, 60.5, 70.5, 45, 5, 50, 78, 15)
		);

		service.setData(
			LocalStorageConstants.STATUSES_DATA_KEY,
			JSON.stringify(statuses)
		);

		expect(
			service.getData(LocalStorageConstants.STATUSES_DATA_KEY)
		).toBeTruthy();
	});

	it('should delete any data', () => {
		const statuses: Array<Status> = new Array<Status>();
		statuses.push(
			new Status(0, 0, 'test', 10, 27, 60.5, 70.5, 45, 5, 50, 78, 15)
		);

		service.setData(
			LocalStorageConstants.STATUSES_DATA_KEY,
			JSON.stringify(statuses)
		);

		service.deleteData(LocalStorageConstants.STATUSES_DATA_KEY);

		expect(
			service.getData(LocalStorageConstants.STATUSES_DATA_KEY)
		).toBeFalsy();
	});
});
