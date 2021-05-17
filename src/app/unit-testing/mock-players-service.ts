import { Injectable } from '@angular/core';
import { PlayerFieldPositionEnum } from '../enums/player-field-position.enum';
import { Player } from '../models/player.model';
import { LocalStorageService } from '../services/local-storage.service';
import { PlayersService } from '../services/players.service';

@Injectable({
	providedIn: 'root'
})
export class MockPlayersService extends PlayersService {
	/**
	 * The player list
	 * @type {Array<Player>}
	 * @protected
	 */
	protected players: Array<Player> = [
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
		),
		new Player(
			1,
			0,
			0,
			0,
			'John',
			'Does',
			'01',
			PlayerFieldPositionEnum.CATCHER,
			PlayerFieldPositionEnum.CATCHER
		),
		new Player(
			2,
			1,
			0,
			0,
			'Felix',
			'Bridge',
			'00',
			PlayerFieldPositionEnum.RIGHT_FIELDER,
			PlayerFieldPositionEnum.RIGHT_FIELDER
		)
	];

	constructor(localStorageService: LocalStorageService) {
		super(localStorageService);
	}
}
