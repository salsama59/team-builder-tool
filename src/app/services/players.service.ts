import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageConstants } from '../constants/local-storage-constants';
import { Player } from '../models/player.model';
import { LocalStorageService } from './local-storage.service';

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
	 * @protected
	 */
	protected players: Array<Player> = new Array<Player>();

	constructor(private localStorageService: LocalStorageService) {
		const playersStringData: string | null = this.localStorageService.getData(
			LocalStorageConstants.PLAYERS_DATA_KEY
		);
		if (playersStringData) {
			this.players = <Array<Player>>JSON.parse(playersStringData);
		}
	}

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
