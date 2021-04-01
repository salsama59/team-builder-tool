import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Team } from '../models/team.model';
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
	 * Creates an instance of teams component.
	 * @constructor
	 * @param teamsService the teams service injected
	 * @param router the router injected
	 * @param activatedRoute the activated route injected
	 */
	constructor(
		private teamsService: TeamsService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	/**
	 * Initialize the team list.
	 */
	ngOnInit(): void {
		this.teams = this.teamsService.getTeams();
		this.teamsChangedSubscription = this.teamsService.teamsChanged.subscribe(
			(newTeams) => {
				this.teams = newTeams;
			}
		);
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
			relativeTo: this.activatedRoute
		});
	}

	/**
	 * Display the team element given an id ready for edition by routing the user to the TeamComponent view
	 * @param teamId the team id.
	 */
	onEditTeamElement(teamId: number): void {
		void this.router.navigate([teamId, 'edit'], {
			relativeTo: this.activatedRoute
		});
	}

	/**
	 * Display the new team creation form by routing the user to the TeamComponent view
	 */
	onCreateTeamElement(): void {
		void this.router.navigate(['create'], {
			relativeTo: this.activatedRoute
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
			relativeTo: this.activatedRoute
		});
	}
}
