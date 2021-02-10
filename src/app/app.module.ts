import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './teams/team/team.component';
import { TeamsService } from './services/teams.service';
import { AppRoutingModule } from './app-routing.module';

/**
 * This class represent the application module
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
