import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public teams: Array<Team> = new Array<Team>();

  ngOnInit(): void {
    this.teams.push(new Team(0, 'my first team', 'MFT'));
    this.teams.push(new Team(1, 'my second team', 'MST'));
    this.teams.push(new Team(2, 'my third team', 'MTT'));
  }
}
