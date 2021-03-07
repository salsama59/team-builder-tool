import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PlayerFieldPositionEnum } from '../enums/player-field-position.enum';
import { Player } from '../models/player.model';
import { PlayerComponent } from './player/player.component';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
	let playersComponent: PlayersComponent;
	let fixture: ComponentFixture<PlayersComponent>;
	let activatedRoute: ActivatedRoute;
	let router: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				CommonModule,
				RouterTestingModule.withRoutes([
					{
						path: 'players',
						component: PlayersComponent,
						children: [{ path: ':playerId', component: PlayerComponent }]
					}
				])
			],
			declarations: [PlayersComponent, PlayerComponent],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						params: of({}),
						queryParams: of({}),
						snapshot: { params: { playerId: '0' } },
						url: of([
							new UrlSegment('/', {}),
							new UrlSegment('players', { playerId: '0' })
						]),
						fragment: of('/players')
					}
				}
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PlayersComponent);
		playersComponent = fixture.componentInstance;
		router = TestBed.inject(Router);
		activatedRoute = TestBed.inject(ActivatedRoute);
		playersComponent.players = [
			new Player(
				0,
				0,
				0,
				0,
				'Joe',
				PlayerFieldPositionEnum.CENTER_FIELDER,
				PlayerFieldPositionEnum.CENTER_FIELDER
			)
		];
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(playersComponent).toBeTruthy();
	});

	it('should posses a player in it list', () => {
		expect(playersComponent.players).toBeDefined();
		expect(playersComponent.players).toHaveSize(1);
	});

	it('should render the player list header', () => {
		const compiled = fixture.nativeElement;
		expect(
			compiled.querySelector('h5#players-list-header').textContent
		).toContain('Players');
	});

	it('should render a player name in the list', () => {
		const compiled = fixture.nativeElement;
		const index: number = 0;
		if (playersComponent.players) {
			expect(
				compiled.querySelector('div#player-name-element-' + index.toString())
					.textContent
			).toContain(playersComponent.players[index].playerName);
		}
	});

	it('should render a player field position in the list', () => {
		const compiled = fixture.nativeElement;
		const index: number = 0;
		if (playersComponent.players) {
			expect(
				compiled.querySelector(
					'div#player-field-position-element-' + index.toString()
				).textContent
			).toContain(playersComponent.players[index].playerFieldPosition);
		}
	});

	it('should render a new player button', () => {
		const compiled = fixture.nativeElement;
		expect(
			compiled.querySelector('a#new-player-button-id').textContent
		).toContain('Add a new player');
	});

	it('should navigate to view player section', () => {
		const spy = spyOn(router, 'navigate');
		playersComponent.onViewPlayerElement(0);
		expect(spy).toHaveBeenCalledWith([0], { relativeTo: activatedRoute });
	});
});
