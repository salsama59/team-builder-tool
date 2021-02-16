import { TestBed } from '@angular/core/testing';
import { PlayerFieldPositionEnum } from '../enums/player-field-position.enum';
import { Player } from '../models/player.model';

import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of player', () => {
    expect(service.getPlayers().length).toBeCloseTo(1);
  });

  it('should return a player element', () => {
    expect(service.getPlayerById(0)).toEqual(new Player(0, 0, 0, 0, 'Joe', PlayerFieldPositionEnum.CENTER_FIELDER, PlayerFieldPositionEnum.CENTER_FIELDER));
  });

  it('should add a new player element', () => {
    const newAddedPlayer: Player = new Player(1, 0, 0, 0, 'Joe', PlayerFieldPositionEnum.LEFT_FIELDER, PlayerFieldPositionEnum.SHORT_STOP);
    service.addPlayer(newAddedPlayer);
    expect(service.getPlayers().length).toBeCloseTo(2);
    expect(service.getPlayers()).toContain(newAddedPlayer);
  });

  it('should delete a player element', () => {
    service.deletePlayerById(0);
    expect(service.getPlayers().length).toBeCloseTo(0);
    expect(service.getPlayers()).not.toContain(new Player(0, 0, 0, 0, 'Joe', PlayerFieldPositionEnum.CENTER_FIELDER, PlayerFieldPositionEnum.CENTER_FIELDER));
  });
});
