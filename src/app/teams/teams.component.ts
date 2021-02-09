import { Component, OnInit } from '@angular/core';
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
export class TeamsComponent implements OnInit {

  /**
   * The team list that will be displayed.
   * @type {Array<Team> | null}
   * @public
   */
  public teams: Array<Team> | null = null;

  /**
   * Creates an instance of teams component.
   * @param teamsService the teams service injected
   */
  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teams = this.teamsService.getTeams();
  }
}
