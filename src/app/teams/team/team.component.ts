import { Component, Input } from '@angular/core';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input()
  public currentTeam: Team | null = null;
}
