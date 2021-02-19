import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player.model';
import { PlayersService } from '../services/players.service';

/**
 * This class represent the players component.
 * @implements OnInit
 */
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  /**
   * The player list that will be displayed.
   * @type {Array<Player> | null}
   * @public
   */
  public players: Array<Player> | null = null;

  /**
   * Creates an instance of players component.
   * @constructor
   * @param playersService the players service injected
   */
  constructor(private playersService: PlayersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  /**
   * Initialize the player list.
   */
  ngOnInit(): void {
    this.players = this.playersService.getPlayers();
  }

  /**
   * Display the team element given an id by routing the user to the PlayerComponent view
   * @param playerId the player id.
   */
  onViewplayerElement(playerId: number): void {
    this.router.navigate([playerId], { relativeTo: this.activatedRoute });
  }

}
