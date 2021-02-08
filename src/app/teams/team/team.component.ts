import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input()
  public teamIdToDisplay: number = 0;

  public currentTeam: Team | null = null;

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.currentTeam = this.teamsService.getTeamById(this.teamIdToDisplay);
  }
}
