import { Component, Input, OnInit } from '@angular/core';
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
   * The team id to display
   * @type {number}
   * @public
   */
  @Input()
  public teamIdToDisplay: number = 0;

  /**
   * The current team to be displayed
   */
  public currentTeam: Team | null = null;

  /**
   * Creates an instance of team component.
   * @param teamsService  the teams service injected
   */
  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.currentTeam = this.teamsService.getTeamById(this.teamIdToDisplay);
  }
}
