import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageConstants } from '../constants/local-storage-constants';
import { Team } from '../models/team.model';
import { LocalStorageService } from '../services/local-storage.service';
import { TeamsService } from '../services/teams.service';
/**
 * This class represent the teams component.
 * @implements OnInit
 */
@Component({
	selector: 'app-teams',
	templateUrl: './teams.component.html',
	styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit, OnDestroy {
	/**
	 * The team list that will be displayed.
	 * @type {Array<Team> | null}
	 * @public
	 */
	public teams: Array<Team> | null = null;

	/**
	 * Teams changed subscription of teams component
	 */
	private teamsChangedSubscription!: Subscription;

	/**
	 * Maximum team per page count
	 */
	public maximumTeamPerPageCount: number = 5;

	/**
	 * Current team page
	 */
	private currentTeamPage: number = 1;

	/**
	 * Creates an instance of teams component.
	 * @constructor
	 * @param teamsService the teams service injected
	 * @param router the router injected
	 * @param activatedRoute the activated route injected
	 * @param localStorageService the local storage service injected
	 */
	constructor(
		public teamsService: TeamsService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private localStorageService: LocalStorageService
	) {}

	/**
	 * Initialize the team list.
	 * Subscribe to the teams modifications and save the datas to the localstorage.
	 */
	ngOnInit(): void {
		this.paginateTeams('1');
		void this.router.navigate([], {
			relativeTo: this.activatedRoute,
			queryParams: { page: '1' }
		});

		this.activatedRoute.queryParams.subscribe((params: Params) => {
			this.paginateTeams(params['page']);
		});

		this.teamsChangedSubscription = this.teamsService.teamsChanged.subscribe(
			(newTeams) => {
				this.localStorageService.setData(
					LocalStorageConstants.TEAMS_DATA_KEY,
					JSON.stringify(newTeams)
				);
				this.paginateTeams(this.currentTeamPage);
			}
		);
	}

	/**
	 * Paginates the team list given a page number
	 * @param pageNumber the page number
	 */
	paginateTeams(pageNumber: string | number | undefined | null): void {
		if (pageNumber) {
			let newPageTotal: number = Math.ceil(
				this.teamsService.getTeams().length / this.maximumTeamPerPageCount
			);

			if (newPageTotal === 0) {
				newPageTotal = 1;
			}

			if (newPageTotal < +pageNumber) {
				pageNumber = newPageTotal.toString();
			}

			this.currentTeamPage = +pageNumber;
			const start: number =
				this.maximumTeamPerPageCount * +pageNumber -
				this.maximumTeamPerPageCount;
			const end: number = this.maximumTeamPerPageCount * +pageNumber;
			this.teams = this.teamsService.getTeams().slice(start, end);
		}
	}

	/**
	 * Unsubscribe to the teams changed subscription
	 */
	ngOnDestroy(): void {
		this.teamsChangedSubscription.unsubscribe();
	}

	/**
	 * Display the team element given an id by routing the user to the TeamComponent view
	 * @param teamId the team id.
	 */
	onViewTeamElement(teamId: number): void {
		void this.router.navigate([teamId, 'view'], {
			relativeTo: this.activatedRoute,
			queryParamsHandling: 'merge'
		});
	}

	/**
	 * Display the team element given an id ready for edition by routing the user to the TeamComponent view
	 * @param teamId the team id.
	 */
	onEditTeamElement(teamId: number): void {
		void this.router.navigate([teamId, 'edit'], {
			relativeTo: this.activatedRoute,
			queryParamsHandling: 'merge'
		});
	}

	/**
	 * Display the new team creation form by routing the user to the TeamComponent view
	 */
	onCreateTeamElement(): void {
		void this.router.navigate(['create'], {
			relativeTo: this.activatedRoute,
			queryParamsHandling: 'merge'
		});
	}

	/**
	 * Delete the a team element given it's index.
	 * Reload the current view
	 * @param teamIndex the team index
	 */
	onDeleteTeamElement(teamIndex: number): void {
		this.teamsService.deleteTeamById(teamIndex);
		void this.router.navigate(['.'], {
			relativeTo: this.activatedRoute,
			queryParams: { page: this.currentTeamPage },
			queryParamsHandling: 'merge'
		});
	}
}
