import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Team } from 'src/app/models/team.model';
import { TeamsService } from 'src/app/services/teams.service';

/**
 * This class represent the team component.
 * @implements OnInit
 */
@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
	/**
	 * The current team to be displayed
	 */
	public currentTeam: Team | null = null;

	/**
	 * Creates an instance of team component.
	 * @constructor
	 * @param teamsService  the teams service injected
	 * @param activatedRoute the activated route
	 */
	constructor(
		private teamsService: TeamsService,
		private activatedRoute: ActivatedRoute
	) {}

	/**
	 * Initialize the current displayed team by getting the url parameter.
	 * Also a subscribtion to the parameter change is done in order to update the current displayed team whe needed.
	 */
	ngOnInit(): void {
		//Get the team id value as soon as possible using the snapshot property, and convert the string value to number with the '+' operator
		const teamId: number = +this.activatedRoute.snapshot.params['teamId'];
		this.currentTeam = this.teamsService.getTeamById(teamId);

		//Subscribe to the params property change in case the routing is done in the same page.
		this.activatedRoute.params.subscribe((params: Params) => {
			const teamId: number = +params['teamId'];
			this.currentTeam = this.teamsService.getTeamById(teamId);
		});
	}
}
