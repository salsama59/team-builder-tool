import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Player } from 'src/app/models/player.model';
import { PlayersService } from 'src/app/services/players.service';

/**
 * This class represent the player component.
 * @implements OnInit
 */
@Component({
	selector: 'app-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
	/**
	 * The current player to be displayed
	 */
	public currentPlayer: Player | null = null;

	/**
	 * Creates an instance of player component.
	 * @constructor
	 * @param playersService  the players service injected
	 * @param activatedRoute the activated route
	 */
	constructor(
		private playersService: PlayersService,
		private activatedRoute: ActivatedRoute
	) {}

	/**
	 * Initialize the current displayed player by getting the url parameter.
	 * Also a subscribtion to the parameter change is done in order to update the current displayed player whe needed.
	 */
	ngOnInit(): void {
		//Get the player id value as soon as possible using the snapshot property, and convert the string value to number with the '+' operator
		const playerId: number = +this.activatedRoute.snapshot.params['playerId'];
		this.currentPlayer = this.playersService.getPlayerById(playerId);

		//Subscribe to the params property change in case the routing is done in the same page.
		this.activatedRoute.params.subscribe((params: Params) => {
			const playerId: number = +params['playerId'];
			this.currentPlayer = this.playersService.getPlayerById(playerId);
		});
	}
}
