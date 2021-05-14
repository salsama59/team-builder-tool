import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './players/player/player.component';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './statuses/status/status.component';
import { StatusesComponent } from './statuses/statuses.component';
import { TeamComponent } from './teams/team/team.component';
import { TeamsComponent } from './teams/teams.component';

/**
 * The application routes array
 * @type {Routes}
 * @public
 */
const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'teams',
		component: TeamsComponent,
		children: [
			{ path: ':teamId/:mode', component: TeamComponent },
			{ path: ':mode', component: TeamComponent }
		]
	},
	{
		path: 'players',
		component: PlayersComponent,
		children: [
			{ path: ':playerId/:mode', component: PlayerComponent },
			{ path: ':mode', component: PlayerComponent }
		]
	},
	{
		path: 'statuses',
		component: StatusesComponent,
		children: [
			{ path: ':statusId/:mode', component: StatusComponent },
			{ path: ':mode', component: StatusComponent }
		]
	}
];

/**
 * This class represent the application routing module.
 */
@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
