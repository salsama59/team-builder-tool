import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageConstants } from '../constants/local-storage-constants';
import { Player } from '../models/player.model';
import { LocalStorageService } from '../services/local-storage.service';
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
	 * Maximum player per page count
	 */
	public maximumPlayerPerPageCount: number = 5;

	/**
	 * Current player page
	 */
	private currentPlayerPage: number = 1;

	/**
	 * Creates an instance of players component.
	 * @constructor
	 * @param playersService the players service injected
	 * @param router the router injected
	 * @param activatedRoute the activated route injected
	 * @param localStorageService the local storage service injected
	 */
	constructor(
		public playersService: PlayersService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private localStorageService: LocalStorageService
	) {}

	/**
	 * Initialize the player list.
	 * Subscribe to the players modifications and save the datas to the localstorage.
	 */
	ngOnInit(): void {
		this.paginatePlayers('1');
		void this.router.navigate([], {
			relativeTo: this.activatedRoute,
			queryParams: { page: '1' }
		});

		this.activatedRoute.queryParams.subscribe((params: Params) => {
			this.paginatePlayers(params['page']);
		});

		this.playersChangedSubscription = this.playersService.playersChanged.subscribe(
			(newPlayers) => {
				this.players = newPlayers;
				this.localStorageService.setData(
					LocalStorageConstants.PLAYERS_DATA_KEY,
					JSON.stringify(this.players)
				);
				this.paginatePlayers(this.currentPlayerPage);
			}
		);
	}

	/**
	 * Paginates the player list given a page number.
	 * @param pageNumber the page number.
	 */
	paginatePlayers(pageNumber: string | number | undefined | null): void {
		if (pageNumber) {
			const newPageTotal: number = Math.ceil(
				this.playersService.getPlayers().length / this.maximumPlayerPerPageCount
			);

			if (newPageTotal < +pageNumber) {
				pageNumber = newPageTotal.toString();
			}

			const start: number =
				this.maximumPlayerPerPageCount * +pageNumber -
				this.maximumPlayerPerPageCount;
			const end: number = this.maximumPlayerPerPageCount * +pageNumber;
			this.players = this.playersService.getPlayers().slice(start, end);
		}
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
			relativeTo: this.activatedRoute,
			queryParamsHandling: 'merge'
		});
	}

	/**
	 * Display the player element given an id by routing the user to the PlayerComponent edit form
	 * @param playerId the player id.
	 */
	onEditPlayerElement(playerId: number): void {
		void this.router.navigate([playerId, 'edit'], {
			relativeTo: this.activatedRoute,
			queryParamsHandling: 'merge'
		});
	}

	/**
	 * Display the new player creation form by routing the user to the PlayerComponent view
	 */
	onCreatePlayerElement(): void {
		void this.router.navigate(['create'], {
			relativeTo: this.activatedRoute,
			queryParamsHandling: 'merge'
		});
	}

	/**
	 * Delete the a player element given it's index.
	 * Reload the current view
	 * @param playerIndex the player index
	 */
	onDeletePlayerElement(playerIndex: number): void {
		this.playersService.deletePlayerById(playerIndex);
		void this.router.navigate(['.'], {
			relativeTo: this.activatedRoute,
			queryParams: { page: this.currentPlayerPage },
			queryParamsHandling: 'merge'
		});
	}
}
