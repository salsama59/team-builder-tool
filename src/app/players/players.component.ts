import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from '../models/player.model';
import { PlayersService } from '../services/players.service';

/**
 * This class represent the players component.
 * @implements OnInit
 */
@Component({
	selector: 'app-players',
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnDestroy {
	/**
	 * The player list that will be displayed.
	 * @type {Array<Player> | null}
	 * @public
	 */
	public players: Array<Player> | null = null;

	/**
	 * Players changed subscription of players component
	 */
	private playersChangedSubscription!: Subscription;

	/**
	 * Creates an instance of players component.
	 * @constructor
	 * @param playersService the players service injected
	 * @param router the router injected
	 * @param activatedRoute the activated route injected
	 */
	constructor(
		private playersService: PlayersService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	/**
	 * Initialize the player list.
	 */
	ngOnInit(): void {
		this.players = this.playersService.getPlayers();
		this.playersChangedSubscription = this.playersService.playersChanged.subscribe(
			(newPlayers) => {
				this.players = newPlayers;
			}
		);
	}

	/**
	 * Unsubscribe to the players changed subscription
	 */
	ngOnDestroy(): void {
		this.playersChangedSubscription.unsubscribe();
	}

	/**
	 * Display the player element given an id by routing the user to the PlayerComponent view form
	 * @param playerId the player id.
	 */
	onViewPlayerElement(playerId: number): void {
		void this.router.navigate([playerId, 'view'], {
			relativeTo: this.activatedRoute
		});
	}

	/**
	 * Display the player element given an id by routing the user to the PlayerComponent edit form
	 * @param playerId the player id.
	 */
	onEditPlayerElement(playerId: number): void {
		void this.router.navigate([playerId, 'edit'], {
			relativeTo: this.activatedRoute
		});
	}

	/**
	 * Display the new player creation form by routing the user to the PlayerComponent view
	 */
	onCreatePlayerElement(): void {
		void this.router.navigate(['create'], {
			relativeTo: this.activatedRoute
		});
	}
}
