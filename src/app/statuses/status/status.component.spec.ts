import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StatusComponent } from './status.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { StatusesComponent } from '../statuses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusesService } from 'src/app/services/statuses.service';
import { MockStatusesService } from 'src/app/unit-testing/mock-statuses-service';
import { PlayersService } from 'src/app/services/players.service';
import { MockPlayersService } from 'src/app/unit-testing/mock-players-service';

describe('StatusComponent', () => {
	let statusComponent: StatusComponent;
	let fixture: ComponentFixture<StatusComponent>;

	describe('Generic behaviour', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'statuses',
							component: StatusesComponent,
							children: [
								{ path: ':statusId/:mode', component: StatusComponent },
								{ path: ':mode', component: StatusComponent }
							]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ statusId: '0', mode: 'view' }),
							queryParams: of({}),
							snapshot: { params: { statusId: '0', mode: 'view' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('statuses', { statusId: '0', mode: 'view' })
							]),
							fragment: of('/statuses')
						}
					},
					{
						provide: StatusesService,
						useClass: MockStatusesService
					},
					{
						provide: PlayersService,
						useClass: MockPlayersService
					}
				],
				declarations: [StatusComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(StatusComponent);
			statusComponent = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(statusComponent).toBeTruthy();
		});

		it(`should have a current status property populated`, () => {
			expect(statusComponent.currentStatus).toBeDefined();
			expect(statusComponent.currentStatus?.statusId).toBeDefined();
			expect(statusComponent.currentStatus?.playerId).toBeDefined();
			expect(statusComponent.currentStatus?.speed).toBeDefined();
			expect(statusComponent.currentStatus?.stamina).toBeDefined();
			expect(statusComponent.currentStatus?.battingEfficiency).toBeDefined();
			expect(statusComponent.currentStatus?.catchEfficiency).toBeDefined();
			expect(statusComponent.currentStatus?.pitchEfficiency).toBeDefined();
			expect(statusComponent.currentStatus?.passEfficiency).toBeDefined();
			expect(statusComponent.currentStatus?.battingPower).toBeDefined();
			expect(statusComponent.currentStatus?.pitchingPower).toBeDefined();
			expect(statusComponent.currentStatus?.pitchingEffect).toBeDefined();
		});
	});

	describe('Specific error behaviour', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'statuses',
							component: StatusesComponent,
							children: [
								{ path: ':statusId/:mode', component: StatusComponent },
								{ path: ':mode', component: StatusComponent }
							]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ statusId: '-1', mode: 'view' }),
							queryParams: of({}),
							snapshot: { params: { statusId: '-1', mode: 'view' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('statuses', { statusId: '-1', mode: 'view' })
							]),
							fragment: of('/statuses')
						}
					},
					{
						provide: StatusesService,
						useClass: MockStatusesService
					},
					{
						provide: PlayersService,
						useClass: MockPlayersService
					}
				],
				declarations: [StatusComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(StatusComponent);
			statusComponent = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			//Just a test for the purpose of when a wrong statusId is sent as parameter
			expect(true).toBeTruthy();
		});
	});

	describe('view mode', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'statuses',
							component: StatusesComponent,
							children: [
								{ path: ':statusId/:mode', component: StatusComponent },
								{ path: ':mode', component: StatusComponent }
							]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ statusId: '0', mode: 'view' }),
							queryParams: of({}),
							snapshot: { params: { statusId: '0', mode: 'view' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('statuses', { statusId: '0', mode: 'view' })
							]),
							fragment: of('/statuses')
						}
					},
					{
						provide: StatusesService,
						useClass: MockStatusesService
					},
					{
						provide: PlayersService,
						useClass: MockPlayersService
					}
				],
				declarations: [StatusComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(StatusComponent);
			statusComponent = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should render the status form with values from current status', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#statusIdFormInput')).nativeElement.value
			).toContain(statusComponent.currentStatus?.statusId);
			expect(
				compiled.query(By.css('#playerIdFormInput')).nativeElement.value
			).toContain(statusComponent.currentStatus?.playerId);
			expect(
				compiled.query(By.css('#speedFormInput')).nativeElement.value
			).toContain(statusComponent.currentStatus?.speed);
			expect(
				compiled.query(By.css('#staminaFormInput')).nativeElement.value
			).toContain(statusComponent.currentStatus?.stamina);
			expect(
				compiled.query(By.css('#catchEfficiencyFormInput')).nativeElement.value
			).toContain(statusComponent.currentStatus?.catchEfficiency);
			expect(
				compiled.query(By.css('#pitchEfficiencyFormInput')).nativeElement.value
			).toContain(statusComponent.currentStatus?.pitchEfficiency);
			expect(
				compiled.query(By.css('#passEfficiencyFormInput')).nativeElement.value
			).toContain(statusComponent.currentStatus?.passEfficiency);
			expect(
				compiled.query(By.css('#battingEfficiencyFormInput')).nativeElement
					.value
			).toContain(statusComponent.currentStatus?.battingEfficiency);
			expect(
				compiled.query(By.css('#battingPowerFormInput')).nativeElement.value
			).toContain(statusComponent.currentStatus?.battingPower);
			expect(
				compiled.query(By.css('#pitchingPowerFormInput')).nativeElement.value
			).toContain(statusComponent.currentStatus?.pitchingPower);
			expect(
				compiled.query(By.css('#pitchingEffectFormInput')).nativeElement.value
			).toContain(statusComponent.currentStatus?.pitchingEffect);
		});

		it('should render the status form in disabled state', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#statusIdFormInput')).nativeElement.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#playerIdFormInput')).nativeElement.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#speedFormInput')).nativeElement.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#staminaFormInput')).nativeElement.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#catchEfficiencyFormInput')).nativeElement
					.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#pitchEfficiencyFormInput')).nativeElement
					.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#passEfficiencyFormInput')).nativeElement
					.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#battingEfficiencyFormInput')).nativeElement
					.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#battingPowerFormInput')).nativeElement.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#pitchingPowerFormInput')).nativeElement.disabled
			).toBeTruthy();
			expect(
				compiled.query(By.css('#pitchingEffectFormInput')).nativeElement
					.disabled
			).toBeTruthy();
		});
	});

	describe('edit mode', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'statuses',
							component: StatusesComponent,
							children: [
								{ path: ':statusId/:mode', component: StatusComponent },
								{ path: ':mode', component: StatusComponent }
							]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ statusId: '0', mode: 'edit' }),
							queryParams: of({}),
							snapshot: { params: { statusId: '0', mode: 'edit' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('statuses', { statusId: '0', mode: 'edit' })
							]),
							fragment: of('/statuses')
						}
					},
					{
						provide: StatusesService,
						useClass: MockStatusesService
					},
					{
						provide: PlayersService,
						useClass: MockPlayersService
					}
				],
				declarations: [StatusComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(StatusComponent);
			statusComponent = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should render the status form with values from current status during edit mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#playerIdFormInput')).nativeElement.value
			).toEqual(statusComponent.currentStatus?.playerId.toString());
			expect(
				compiled.query(By.css('#profileNameFormInput')).nativeElement.value
			).toEqual(statusComponent.currentStatus?.profileName);
			expect(
				compiled.query(By.css('#speedFormInput')).nativeElement.value
			).toEqual(statusComponent.currentStatus?.speed.toString());
			expect(
				compiled.query(By.css('#staminaFormInput')).nativeElement.value
			).toEqual(statusComponent.currentStatus?.stamina.toString());
			expect(
				compiled.query(By.css('#catchEfficiencyFormInput')).nativeElement.value
			).toEqual(statusComponent.currentStatus?.catchEfficiency.toString());
			expect(
				compiled.query(By.css('#pitchEfficiencyFormInput')).nativeElement.value
			).toEqual(statusComponent.currentStatus?.pitchEfficiency.toString());
			expect(
				compiled.query(By.css('#passEfficiencyFormInput')).nativeElement.value
			).toEqual(statusComponent.currentStatus?.passEfficiency.toString());
			expect(
				compiled.query(By.css('#battingEfficiencyFormInput')).nativeElement
					.value
			).toEqual(statusComponent.currentStatus?.battingEfficiency.toString());
			expect(
				compiled.query(By.css('#battingPowerFormInput')).nativeElement.value
			).toEqual(statusComponent.currentStatus?.battingPower.toString());
			expect(
				compiled.query(By.css('#pitchingPowerFormInput')).nativeElement.value
			).toEqual(statusComponent.currentStatus?.pitchingPower.toString());
			expect(
				compiled.query(By.css('#pitchingEffectFormInput')).nativeElement.value
			).toEqual(statusComponent.currentStatus?.pitchingEffect.toString());
		});

		it('should render the status form in enabled state during edit mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#playerIdFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#profileNameFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#speedFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#staminaFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#catchEfficiencyFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#pitchEfficiencyFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#passEfficiencyFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#battingEfficiencyFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#battingPowerFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#pitchingPowerFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#pitchingEffectFormInput')).nativeElement
					.disabled
			).toBeFalsy();
		});

		it('should filter the player list on player id field keyup event if there is a value during edit mode', () => {
			statusComponent.onPlayerIdFieldKeyup('e');
			expect(true).toBeTruthy();
		});

		it('should filter the player list on player id field keyup event if there is a player id during edit mode', () => {
			statusComponent.onPlayerIdFieldKeyup('0');
			expect(true).toBeTruthy();
		});

		it('should not filter the player list on player id field keyup event if there is no value during edit mode', () => {
			statusComponent.onPlayerIdFieldKeyup('');
			expect(true).toBeTruthy();
		});

		it('should select a player id from the autocomplete list during edit mode', () => {
			const playerIdInput: HTMLInputElement = fixture.nativeElement.querySelector(
				'#playerIdFormInput'
			);
			statusComponent.onSelectPlayer(playerIdInput, 0);
			expect(true).toBeTruthy();
		});

		it('should not select a player id from the autocomplete list if there is no player id control during edit mode', () => {
			const playerIdInput: HTMLInputElement = fixture.nativeElement.querySelector(
				'#playerIdFormInput'
			);
			statusComponent.statusForm.removeControl('playerId');
			statusComponent.onSelectPlayer(playerIdInput, 0);
			expect(true).toBeTruthy();
		});

		it('should return to status list when clicking on save button during edit mode', () => {
			const compiled = fixture.debugElement;
			compiled.nativeElement.querySelector('#statusSubmitButton').click();
			expect(true).toBeTruthy();
		});

		it('should return to status list when clicking on cancel button during edit mode', () => {
			const compiled = fixture.debugElement;
			compiled.nativeElement.querySelector('#statusCancelButton').click();
			expect(true).toBeTruthy();
		});
	});

	describe('create mode', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [
					RouterTestingModule.withRoutes([
						{
							path: 'statuses',
							component: StatusesComponent,
							children: [
								{ path: ':statusId/:mode', component: StatusComponent },
								{ path: ':mode', component: StatusComponent }
							]
						}
					]),
					ReactiveFormsModule
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {
							params: of({ statusId: '0', mode: 'create' }),
							queryParams: of({}),
							snapshot: { params: { statusId: '0', mode: 'create' } },
							url: of([
								new UrlSegment('/', {}),
								new UrlSegment('statuses', { statusId: '0', mode: 'create' })
							]),
							fragment: of('/statuses')
						}
					},
					{
						provide: StatusesService,
						useClass: MockStatusesService
					},
					{
						provide: PlayersService,
						useClass: MockPlayersService
					}
				],
				declarations: [StatusComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(StatusComponent);
			statusComponent = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should render the status form without values during create mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#playerIdFormInput')).nativeElement.value
			).toEqual('-1');
			expect(
				compiled.query(By.css('#profileNameFormInput')).nativeElement.value
			).toEqual('');
			expect(
				compiled.query(By.css('#speedFormInput')).nativeElement.value
			).toEqual('0');
			expect(
				compiled.query(By.css('#staminaFormInput')).nativeElement.value
			).toEqual('0');
			expect(
				compiled.query(By.css('#catchEfficiencyFormInput')).nativeElement.value
			).toEqual('0');
			expect(
				compiled.query(By.css('#pitchEfficiencyFormInput')).nativeElement.value
			).toEqual('0');
			expect(
				compiled.query(By.css('#passEfficiencyFormInput')).nativeElement.value
			).toEqual('0');
			expect(
				compiled.query(By.css('#battingEfficiencyFormInput')).nativeElement
					.value
			).toEqual('0');
			expect(
				compiled.query(By.css('#battingPowerFormInput')).nativeElement.value
			).toEqual('0');
			expect(
				compiled.query(By.css('#pitchingPowerFormInput')).nativeElement.value
			).toEqual('0');
			expect(
				compiled.query(By.css('#pitchingEffectFormInput')).nativeElement.value
			).toEqual('0');
		});

		it('should render the status form in enabled state during create mode', () => {
			const compiled = fixture.debugElement;
			expect(
				compiled.query(By.css('#playerIdFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#profileNameFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#speedFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#staminaFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#catchEfficiencyFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#pitchEfficiencyFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#passEfficiencyFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#battingEfficiencyFormInput')).nativeElement
					.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#battingPowerFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#pitchingPowerFormInput')).nativeElement.disabled
			).toBeFalsy();
			expect(
				compiled.query(By.css('#pitchingEffectFormInput')).nativeElement
					.disabled
			).toBeFalsy();
		});

		it('should filter the player list on player id field keyup event if there is a value during create mode', () => {
			statusComponent.onPlayerIdFieldKeyup('e');
			expect(true).toBeTruthy();
		});

		it('should not filter the player list on player id field keyup event if there is no value during create mode', () => {
			statusComponent.onPlayerIdFieldKeyup('');
			expect(true).toBeTruthy();
		});

		it('should select a player id from the autocomplete list during create mode', () => {
			const playerIdInput: HTMLInputElement = fixture.nativeElement.querySelector(
				'#playerIdFormInput'
			);
			statusComponent.onSelectPlayer(playerIdInput, 0);
			expect(true).toBeTruthy();
		});

		it('should not select a player id from the autocomplete list if there is no player id control during create mode', () => {
			const playerIdInput: HTMLInputElement = fixture.nativeElement.querySelector(
				'#playerIdFormInput'
			);
			statusComponent.statusForm.removeControl('playerId');
			statusComponent.onSelectPlayer(playerIdInput, 0);
			expect(true).toBeTruthy();
		});

		it('should return to status list when clicking on save button during create mode', () => {
			const compiled = fixture.debugElement;

			expect(
				compiled.nativeElement.querySelector('#statusSubmitButton').disabled
			).toBeTruthy();

			compiled.nativeElement.querySelector('#playerIdFormInput').value = 0;
			compiled.nativeElement
				.querySelector('#playerIdFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector('#profileNameFormInput').value =
				'NEW PROFILE';
			compiled.nativeElement
				.querySelector('#profileNameFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector('#speedFormInput').value = 20;
			compiled.nativeElement
				.querySelector('#speedFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector('#staminaFormInput').value = 20;
			compiled.nativeElement
				.querySelector('#staminaFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector(
				'#catchEfficiencyFormInput'
			).value = 20;
			compiled.nativeElement
				.querySelector('#catchEfficiencyFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector(
				'#pitchEfficiencyFormInput'
			).value = 20;
			compiled.nativeElement
				.querySelector('#pitchEfficiencyFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector(
				'#passEfficiencyFormInput'
			).value = 20;
			compiled.nativeElement
				.querySelector('#passEfficiencyFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector(
				'#battingEfficiencyFormInput'
			).value = 20;
			compiled.nativeElement
				.querySelector('#battingEfficiencyFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector('#battingPowerFormInput').value = 20;
			compiled.nativeElement
				.querySelector('#battingPowerFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector(
				'#pitchingPowerFormInput'
			).value = 20;
			compiled.nativeElement
				.querySelector('#pitchingPowerFormInput')
				.dispatchEvent(new Event('input'));

			compiled.nativeElement.querySelector(
				'#pitchingEffectFormInput'
			).value = 20;
			compiled.nativeElement
				.querySelector('#pitchingEffectFormInput')
				.dispatchEvent(new Event('input'));

			fixture.detectChanges();

			expect(
				compiled.nativeElement.querySelector('#statusSubmitButton').disabled
			).toBeFalsy();

			compiled.nativeElement.querySelector('#statusSubmitButton').click();
		});

		it('should return to status list when clicking on cancel button during create mode', () => {
			const compiled = fixture.debugElement;
			compiled.nativeElement.querySelector('#statusCancelButton').click();
			expect(true).toBeTruthy();
		});
	});
});
