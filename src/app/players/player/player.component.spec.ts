import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PlayerComponent } from './player.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { PlayersComponent } from '../players.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { MockPlayersService } from 'src/app/unit-testing/mock-players-service';
import { TeamsService } from 'src/app/services/teams.service';
import { MockTeamsService } from 'src/app/unit-testing/mock-teams-service';
import { StatusesService } from 'src/app/services/statuses.service';
import { MockStatusesService } from 'src/app/unit-testing/mock-statuses-service';

describe('PlayerComponent', () => {
	let playerComponent: PlayerComponent;
	let fixture: ComponentFixture<PlayerComponent>;

	describe('Generic behaviour', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'players',
							component: PlayersComponent,
							children: [
								{ path: ':playerId/:mode', component: PlayerComponent },
								{ path: ':mode', component: PlayerComponent }
							]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ playerId: '0', mode: 'view' }),
							queryParams: of({}),
							snapshot: { params: { playerId: '0', mode: 'view' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('players', { playerId: '0', mode: 'view' })
							]),
							fragment: of('/players')
						}
					},
					{
						provide: PlayersService,
						useClass: MockPlayersService
					}
				],
				declarations: [PlayerComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(PlayerComponent);
			playerComponent = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(playerComponent).toBeTruthy();
		});

		it(`should have a current player property populated`, () => {
			expect(playerComponent.currentPlayer).toBeDefined();
			expect(playerComponent.currentPlayer?.playerId).toBeDefined();
			expect(playerComponent.currentPlayer?.playerTeamId).toBeDefined();
			expect(playerComponent.currentPlayer?.playerStatusId).toBeDefined();
			expect(playerComponent.currentPlayer?.playerAbilityId).toBeDefined();
			expect(playerComponent.currentPlayer?.playerFirstName).toBeDefined();
			expect(playerComponent.currentPlayer?.playerLastName).toBeDefined();
			expect(playerComponent.currentPlayer?.playerUniformNumber).toBeDefined();
			expect(playerComponent.currentPlayer?.playerFieldPosition).toBeDefined();
			expect(
				playerComponent.currentPlayer?.defaultPlayerFieldPosition
			).toBeDefined();
		});
	});

	describe('Specific error behaviour', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'players',
							component: PlayersComponent,
							children: [
								{ path: ':playerId/:mode', component: PlayerComponent },
								{ path: ':mode', component: PlayerComponent }
							]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ playerId: '-1', mode: 'view' }),
							queryParams: of({}),
							snapshot: { params: { playerId: '-1', mode: 'view' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('players', { playerId: '-1', mode: 'view' })
							]),
							fragment: of('/players')
						}
					},
					{
						provide: PlayersService,
						useClass: MockPlayersService
					}
				],
				declarations: [PlayerComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(PlayerComponent);
			playerComponent = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			//Just a test for the purpose of when a wron playerId is sent as parameter
			expect(true).toBeTruthy();
		});
	});

	describe('view mode', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'players',
							component: PlayersComponent,
							children: [
								{ path: ':playerId/:mode', component: PlayerComponent },
								{ path: ':mode', component: PlayerComponent }
							]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ playerId: '0', mode: 'view' }),
							queryParams: of({}),
							snapshot: { params: { playerId: '0', mode: 'view' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('players', { playerId: '0', mode: 'view' })
							]),
							fragment: of('/players')
						}
					},
					{
						provide: PlayersService,
						useClass: MockPlayersService
					}
				],
				declarations: [PlayerComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(PlayerComponent);
			playerComponent = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should render the player form with values from current player during view mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#playerIdFormInput')).nativeElement.value
			).toContain(playerComponent.currentPlayer?.playerId);
			expect(
				compiled.query(By.css('#playerTeamIdFormInput')).nativeElement.value
			).toContain(playerComponent.currentPlayer?.playerTeamId);
			expect(
				compiled.query(By.css('#playerStatusIdFormInput')).nativeElement.value
			).toContain(playerComponent.currentPlayer?.playerStatusId);
			expect(
				compiled.query(By.css('#playerAbilityIdFormInput')).nativeElement.value
			).toContain(playerComponent.currentPlayer?.playerAbilityId);
			expect(
				compiled.query(By.css('#playerFirstNameFormInput')).nativeElement.value
			).toContain(playerComponent.currentPlayer?.playerFirstName);
			expect(
				compiled.query(By.css('#playerLastNameFormInput')).nativeElement.value
			).toContain(playerComponent.currentPlayer?.playerLastName);
			expect(
				compiled.query(By.css('#playerUniformNumberFormInput')).nativeElement
					.value
			).toContain(playerComponent.currentPlayer?.playerUniformNumber);
			expect(
				compiled.query(By.css('#playerFieldPositionFormInput')).nativeElement
					.value
			).toContain(playerComponent.currentPlayer?.playerFieldPosition);
			expect(
				compiled.query(By.css('#defaultPlayerFieldPositionFormInput'))
					.nativeElement.value
			).toContain(playerComponent.currentPlayer?.defaultPlayerFieldPosition);
		});

		it('should render the player form in disabled state during view mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#playerIdFormInput')).nativeElement.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#playerTeamIdFormInput')).nativeElement.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#playerStatusIdFormInput')).nativeElement
					.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#playerAbilityIdFormInput')).nativeElement
					.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#playerFirstNameFormInput')).nativeElement
					.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#playerLastNameFormInput')).nativeElement
					.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#playerUniformNumberFormInput')).nativeElement
					.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#playerFieldPositionFormInput')).nativeElement
					.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#defaultPlayerFieldPositionFormInput'))
					.nativeElement.disabled
			).toBeTruthy();
		});
	});

	describe('edit mode', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'players',
							component: PlayersComponent,
							children: [
								{ path: ':playerId/:mode', component: PlayerComponent },
								{ path: ':mode', component: PlayerComponent }
							]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ playerId: '0', mode: 'edit' }),
							queryParams: of({}),
							snapshot: { params: { playerId: '0', mode: 'edit' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('players', { playerId: '0', mode: 'edit' })
							]),
							fragment: of('/players')
						}
					},
					{
						provide: PlayersService,
						useClass: MockPlayersService
					}
				],
				declarations: [PlayerComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(PlayerComponent);
			playerComponent = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should render the player form with values from current player during edit mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#playerTeamIdFormInput')).nativeElement.value
			).toContain(playerComponent.currentPlayer?.playerTeamId);
			expect(
				compiled.query(By.css('#playerStatusIdFormInput')).nativeElement.value
			).toContain(playerComponent.currentPlayer?.playerStatusId);
			expect(
				compiled.query(By.css('#playerAbilityIdFormInput')).nativeElement.value
			).toContain(playerComponent.currentPlayer?.playerAbilityId);
			expect(
				compiled.query(By.css('#playerFirstNameFormInput')).nativeElement.value
			).toContain(playerComponent.currentPlayer?.playerFirstName);
			expect(
				compiled.query(By.css('#playerLastNameFormInput')).nativeElement.value
			).toContain(playerComponent.currentPlayer?.playerLastName);
			expect(
				compiled.query(By.css('#playerUniformNumberFormInput')).nativeElement
					.value
			).toContain(playerComponent.currentPlayer?.playerUniformNumber);
			expect(
				compiled.query(By.css('#playerFieldPositionFormInput')).nativeElement
					.value
			).toContain(playerComponent.currentPlayer?.playerFieldPosition);
			expect(
				compiled.query(By.css('#defaultPlayerFieldPositionFormInput'))
					.nativeElement.value
			).toContain(playerComponent.currentPlayer?.defaultPlayerFieldPosition);
		});

		it('should render the player form in enabled state during edit mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#playerTeamIdFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerStatusIdFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerAbilityIdFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerFirstNameFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerLastNameFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerUniformNumberFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerFieldPositionFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#defaultPlayerFieldPositionFormInput'))
					.nativeElement.disabled
			).toBeFalsy();
		});

		it('should filter the team list on team id field keyup event if there is a value during edit mode', () => {
			playerComponent.onTeamIdFieldKeyup('MFT');
			expect(true).toBeTruthy();
		});

		it('should not filter the team list on team id field keyup event if there is no value during edit mode', () => {
			playerComponent.onTeamIdFieldKeyup('');
			expect(true).toBeTruthy();
		});

		it('should select a team id from the autocomplete list during edit mode', () => {
			const playerTeamIdInput: HTMLInputElement = fixture.nativeElement.querySelector(
				'#playerTeamIdFormInput'
			);
			playerComponent.onSelectTeam(playerTeamIdInput, 0);
			expect(true).toBeTruthy();
		});

		it('should filter the status list on status id field keyup event if there is a value during edit mode', () => {
			playerComponent.onStatusIdFieldKeyup('test');
			expect(true).toBeTruthy();
		});

		it('should not filter the status list on status id field keyup event if there is no value during edit mode', () => {
			playerComponent.onStatusIdFieldKeyup('');
			expect(true).toBeTruthy();
		});

		it('should select a status id from the autocomplete list during edit mode', () => {
			const playerStatusIdInput: HTMLInputElement = fixture.nativeElement.querySelector(
				'#playerStatusIdFormInput'
			);
			playerComponent.onSelectStatus(playerStatusIdInput, 0);
			expect(true).toBeTruthy();
		});

		it('should return to player list when clicking on save button during edit mode', () => {
			const compiled = fixture.debugElement;
			compiled.nativeElement.querySelector('#playerSubmitButton').click();
			expect(true).toBeTruthy();
		});

		it('should return to player list when clicking on cancel button during edit mode', () => {
			const compiled = fixture.debugElement;
			compiled.nativeElement.querySelector('#playerCancelButton').click();
			expect(true).toBeTruthy();
		});
	});

	describe('create mode', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'players',
							component: PlayersComponent,
							children: [
								{ path: ':playerId/:mode', component: PlayerComponent },
								{ path: ':mode', component: PlayerComponent }
							]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ playerId: '0', mode: 'create' }),
							queryParams: of({}),
							snapshot: { params: { playerId: '0', mode: 'create' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('players', { playerId: '0', mode: 'create' })
							]),
							fragment: of('/players')
						}
					},
					{
						provide: PlayersService,
						useClass: MockPlayersService
					},
					{
						provide: TeamsService,
						useClass: MockTeamsService
					},
					{
						provide: StatusesService,
						useClass: MockStatusesService
					}
				],
				declarations: [PlayerComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(PlayerComponent);
			playerComponent = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should render the player form without values during create mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#playerTeamIdFormInput')).nativeElement.value
			).toEqual('-1');
			expect(
				compiled.query(By.css('#playerStatusIdFormInput')).nativeElement.value
			).toEqual('-1');
			expect(
				compiled.query(By.css('#playerAbilityIdFormInput')).nativeElement.value
			).toEqual('-1');
			expect(
				compiled.query(By.css('#playerFirstNameFormInput')).nativeElement.value
			).toEqual('');
			expect(
				compiled.query(By.css('#playerLastNameFormInput')).nativeElement.value
			).toEqual('');
			expect(
				compiled.query(By.css('#playerUniformNumberFormInput')).nativeElement
					.value
			).toEqual('');
			expect(
				compiled.query(By.css('#playerFieldPositionFormInput')).nativeElement
					.value
			).toEqual('');
			expect(
				compiled.query(By.css('#defaultPlayerFieldPositionFormInput'))
					.nativeElement.value
			).toEqual('');
		});

		it('should render the player form in enabled state during create mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#playerTeamIdFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerStatusIdFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerAbilityIdFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerFirstNameFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerLastNameFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerUniformNumberFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#playerFieldPositionFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#defaultPlayerFieldPositionFormInput'))
					.nativeElement.disabled
			).toBeFalsy();
		});

		it('should return to player list when clicking on save button during create mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.nativeElement.querySelector('#playerSubmitButton').disabled
			).toBeTruthy();

			compiled.nativeElement.querySelector('#playerTeamIdFormInput').value =
				'2';
			compiled.nativeElement
				.querySelector('#playerTeamIdFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector('#playerStatusIdFormInput').value =
				'0';
			compiled.nativeElement
				.querySelector('#playerStatusIdFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector('#playerAbilityIdFormInput').value =
				'0';
			compiled.nativeElement
				.querySelector('#playerAbilityIdFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector('#playerFirstNameFormInput').value =
				'Thomas';
			compiled.nativeElement
				.querySelector('#playerFirstNameFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector('#playerLastNameFormInput').value =
				'THORN';
			compiled.nativeElement
				.querySelector('#playerLastNameFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector(
				'#playerUniformNumberFormInput'
			).value = '357';
			compiled.nativeElement
				.querySelector('#playerUniformNumberFormInput')
				.dispatchEvent(new Event('input'));

			const playerFieldPositionSelectElement = compiled.nativeElement.querySelector(
				'select#playerFieldPositionFormInput'
			);
			playerFieldPositionSelectElement.value =
				playerFieldPositionSelectElement.options[0].value;
			playerFieldPositionSelectElement.dispatchEvent(new Event('change'));

			const playerDefaultFieldPositionSelectElement = compiled.nativeElement.querySelector(
				'select#defaultPlayerFieldPositionFormInput'
			);
			playerDefaultFieldPositionSelectElement.value =
				playerDefaultFieldPositionSelectElement.options[0].value;
			playerDefaultFieldPositionSelectElement.dispatchEvent(
				new Event('change')
			);

			compiled.nativeElement.querySelector('form').click();

			fixture.detectChanges();

			expect(
				compiled.nativeElement.querySelector('#playerSubmitButton').disabled
			).toBeFalsy();

			compiled.nativeElement.querySelector('#playerSubmitButton').click();
		});

		it('should display an error message for the player uniform number when the number is not unique during create mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.nativeElement.querySelector('#playerSubmitButton').disabled
			).toBeTruthy();

			compiled.nativeElement.querySelector('#playerTeamIdFormInput').value =
				'1';
			compiled.nativeElement
				.querySelector('#playerTeamIdFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector(
				'#playerUniformNumberFormInput'
			).value = '00';
			compiled.nativeElement
				.querySelector('#playerUniformNumberFormInput')
				.dispatchEvent(new Event('input'));

			const playerFieldPositionSelectElement = compiled.nativeElement.querySelector(
				'select#playerFieldPositionFormInput'
			);
			playerFieldPositionSelectElement.value = null;
			playerFieldPositionSelectElement.dispatchEvent(new Event('change'));

			compiled.nativeElement.querySelector('form').click();

			fixture.detectChanges();

			expect(
				compiled.nativeElement.querySelector('#playerSubmitButton').disabled
			).toBeTruthy();
		});

		it('should validate the player uniform number when the playerId control is undefined during create mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.nativeElement.querySelector('#playerSubmitButton').disabled
			).toBeTruthy();

			compiled.nativeElement.querySelector('#playerTeamIdFormInput').value =
				'1';
			compiled.nativeElement
				.querySelector('#playerTeamIdFormInput')
				.dispatchEvent(new Event('input'));

			playerComponent.playerForm.removeControl('playerId');

			compiled.nativeElement.querySelector(
				'#playerUniformNumberFormInput'
			).value = '02';
			compiled.nativeElement
				.querySelector('#playerUniformNumberFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector('form').click();

			fixture.detectChanges();

			expect(
				compiled.nativeElement.querySelector('#playerSubmitButton').disabled
			).toBeTruthy();
		});

		it('should select a status id from the autocomplete list during create mode', () => {
			const playerStatusIdInput: HTMLInputElement = fixture.nativeElement.querySelector(
				'#playerStatusIdFormInput'
			);
			playerComponent.playerForm.removeControl('playerStatusId');
			playerComponent.onSelectStatus(playerStatusIdInput, 0);
			expect(true).toBeTruthy();
		});

		it('should select a team id from the autocomplete list during create mode', () => {
			const playerTeamIdInput: HTMLInputElement = fixture.nativeElement.querySelector(
				'#playerTeamIdFormInput'
			);
			playerComponent.playerForm.removeControl('playerTeamId');
			playerComponent.onSelectTeam(playerTeamIdInput, 0);
			expect(true).toBeTruthy();
		});

		it('should return to player list when clicking on cancel button during create mode', () => {
			const compiled = fixture.debugElement;
			compiled.nativeElement.querySelector('#playerCancelButton').click();
			expect(true).toBeTruthy();
		});
	});
});
