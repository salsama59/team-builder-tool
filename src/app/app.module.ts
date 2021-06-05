import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './teams/team/team.component';
import { TeamsService } from './services/teams.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PlayersService } from './services/players.service';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './players/player/player.component';
import { StatusesComponent } from './statuses/statuses.component';
import { StatusesService } from './services/statuses.service';
import { StatusComponent } from './statuses/status/status.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModelsExporterComponent } from './models-exporter/models-exporter.component';
import { PaginationComponent } from './pagination/pagination.component';

/**
 * This class represent the application module
 */
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		TeamsComponent,
		TeamComponent,
		HomeComponent,
		FooterComponent,
		PlayersComponent,
		PlayerComponent,
		StatusesComponent,
		StatusComponent,
		ModelsExporterComponent,
  PaginationComponent
	],
	imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
	providers: [TeamsService, PlayersService, StatusesService],
	bootstrap: [AppComponent]
})
export class AppModule {}
