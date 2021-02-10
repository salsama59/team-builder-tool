import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './teams/team/team.component';
import { TeamsComponent } from './teams/teams.component';

/**
 * The application routes array
 * @type {Routes}
 * @public
 */
const appRoutes: Routes = [
  {
    path: 'teams'
    , component: TeamsComponent
    , children: [{ path: ':teamId', component: TeamComponent }]
  }
];

/**
 * This class represent the application routing module.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
