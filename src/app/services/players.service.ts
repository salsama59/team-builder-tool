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

	/**
	 * Player id sequence of players service
	 */
	private playerIdSequence: number = -1;

	/**
	 * Creates an instance of players service.
	 * Try to get the player list from the local storage, if there is datas updates the player list.
	 * @param localStorageService the local storage service
	 */
	constructor(private localStorageService: LocalStorageService) {
		const playersStringData: string | null = this.localStorageService.getData(
			LocalStorageConstants.PLAYERS_DATA_KEY
		);
		if (playersStringData) {
			this.players = <Array<Player>>JSON.parse(playersStringData);
		}

		const currentSequenceNumber:
			| string
			| null = this.localStorageService.getData(
			LocalStorageConstants.PLAYER_ID_SEQUENCE_KEY
		);

		if (currentSequenceNumber) {
			this.playerIdSequence = +currentSequenceNumber;
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
		const nextPlayerId = this.getNextPlayerIdSequence();
		playerToAdd.playerId = nextPlayerId;
		this.players.push(playerToAdd);
		this.playersChanged.next(this.getPlayers());
		this.setPlayerIdSequence(nextPlayerId);
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

	/**
	 * Gets next player id sequence
	 * @returns next player id sequence
	 */
	private getNextPlayerIdSequence(): number {
		return this.playerIdSequence + 1;
	}

	/**
	 * Sets the player id sequence
	 * @param newSequenceValue the new sequence value to set
	 */
	private setPlayerIdSequence(newSequenceValue: number): void {
		this.playerIdSequence = newSequenceValue;
		this.localStorageService.setData(
			LocalStorageConstants.PLAYER_ID_SEQUENCE_KEY,
			newSequenceValue.toString()
		);
	}
}
