import { Injectable } from '@angular/core';
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
			PlayerFieldPositionEnum.CENTER_FIELDER,
			PlayerFieldPositionEnum.CENTER_FIELDER
		)
	];

	/**
	 * Get a player given an id
	 * @param playerId the player id to get
	 * @returns a player corresponding to the id
	 */
	getPlayerById(playerId: number): Player {
		return this.players[playerId];
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
		this.players.push(playerToAdd);
	}

	/**
	 * Update a player with the given informations as parameter
	 * @param playerToUpdate the player information which must be used to update the target player.
	 * @returns the player updated
	 */
	updatePlayer(playerToUpdate: Player): Player {
		this.players[playerToUpdate.playerId] = playerToUpdate;
		return this.getPlayerById(playerToUpdate.playerId);
	}

	/**
	 * Delete a player given an id
	 * @param playerIdToDelete the player id to delete
	 */
	deletePlayerById(playerIdToDelete: number): void {
		this.players.splice(playerIdToDelete, 1);
	}
}
