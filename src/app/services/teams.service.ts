import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private teams: Array<Team> = [
    new Team(0, 'my first team', 'MFT'),
    new Team(1, 'my second team', 'MST'),
    new Team(2, 'my third team', 'MTT'),
    new Team(3, 'my fourth team', 'MFTHT')
  ];

  getTeamById(teamId: number): Team {
    return this.teams[teamId];
  }

  getTeams(): Array<Team> {
    return this.teams.slice();
  }

  addTeam(teamToAdd: Team): void {
    this.teams.push(teamToAdd);
  }

  updateTeam(teamToUpdate: Team): Team {
    this.teams[teamToUpdate.teamId] = teamToUpdate;
    return this.getTeamById(teamToUpdate.teamId);
  }

  deleteTeamById(teamIdToDelete: number): void {
    this.teams.splice(teamIdToDelete, 1);
  }
}
