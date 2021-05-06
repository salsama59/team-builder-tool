import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PlayerFieldPositionEnum } from '../enums/player-field-position.enum';
import { Player } from '../models/player.model';

/**
 * This class represent the players Service
 */
@Injectable({
	providedIn: 'root'
})
export class PlayersService {
	/**
	 * The player list
	 * @type {Array<Player>}
	 * @private
	 */
	private players: Array<Player> = [
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

	/**
	 * Players changed event
	 */
	public playersChanged: Subject<Array<Player>> = new Subject<Array<Player>>();

	/**
	 * Get a player given an id
	 * @param playerId the player id to get
	 * @returns a player corresponding to the id
	 */
	getPlayerById(playerId: number): Player | null {
		const resultPlayer: Player | undefined = this.players.find(
			(player) => player.playerId === playerId
		);
		return resultPlayer ? resultPlayer : null;
	}

	/**
	 * Get the player list
	 * @returns a player list
	 */
	getPlayers(): Array<Player> {
		return this.players.slice();
	}

	/**
	 * Add a player to the player list
	 * @param playerToAdd the player element to add
	 */
	addPlayer(playerToAdd: Player): void {
		const nextPlayerId = this.players.length;
		playerToAdd.playerId = nextPlayerId;
		this.players.push(playerToAdd);
		this.playersChanged.next(this.getPlayers());
	}

	/**
	 * Update a player with the given informations as parameter
	 * @param playerToUpdate the player information which must be used to update the target player.
	 * @returns the player updated
	 */
	updatePlayer(playerToUpdate: Player): Player {
		this.players[playerToUpdate.playerId] = playerToUpdate;
		this.playersChanged.next(this.getPlayers());
		return this.players[playerToUpdate.playerId];
	}

	/**
	 * Delete a player given an id
	 * @param playerIdToDelete the player id to delete
	 */
	deletePlayerById(playerIdToDelete: number): void {
		this.players.splice(playerIdToDelete, 1);
		this.playersChanged.next(this.getPlayers());
	}
}
