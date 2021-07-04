import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	ValidationErrors,
	Validators
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ValidatorConstants } from 'src/app/constants/validator-constants';
import { PlayerFieldPositionEnum } from 'src/app/enums/player-field-position.enum';
import { Player } from 'src/app/models/player.model';
import { Status } from 'src/app/models/status.model';
import { Team } from 'src/app/models/team.model';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { PlayersService } from 'src/app/services/players.service';
import { StatusesService } from 'src/app/services/statuses.service';
import { TeamsService } from 'src/app/services/teams.service';

/**
 * This class represent the player component.
 * @implements OnInit
 */
@Component({
	selector: 'app-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
	/**
	 * The current player to be displayed
	 */
	public currentPlayer: Player | null = null;

	/**
	 * Player reactive form object
	 */
	public playerForm!: FormGroup;

	/**
	 * Determines whether in view mode or edit mode
	 */
	public isInViewMode: boolean = false;

	/**
	 * Determines whether in create mode
	 */
	public isInCreateMode: boolean = false;

	/**
	 * Filtered team list of player component
	 */
	public filteredTeamList: Array<Team> = [];

	/**
	 * Filtered status list of player component
	 */
	public filteredStatusList: Array<Status> = [];

	/**
	 * Validator constants of team component
	 */
	public validatorConstants = ValidatorConstants;

	/**
	 * Creates an instance of player component.
	 * @constructor
	 * @param playersService  the players service injected
	 * @param activatedRoute the activated route
	 * @param changeDetectorRef the change detector reference
	 * @param router the router
	 * @param teamsService the teams service
	 * @param statusesService the status service
	 * @param formValidationService the form validation service
	 */
	constructor(
		private playersService: PlayersService,
		private activatedRoute: ActivatedRoute,
		private changeDetectorRef: ChangeDetectorRef,
		private router: Router,
		private teamsService: TeamsService,
		private statusesService: StatusesService,
		public formValidationService: FormValidationService
	) {}

	/**
	 * Initialize the current displayed player by getting the url parameter.
	 * Also a subscribtion to the parameter change is done in order to update the current displayed player whe needed.
	 */
	ngOnInit(): void {
		//Subscribe to the params property change in case the routing is done in the same page.
		this.activatedRoute.params.subscribe((params: Params) => {
			const mode: string = params['mode'];
			this.isInViewMode = mode === 'view';
			this.isInCreateMode = mode === 'create';
			switch (mode) {
				case 'view':
				case 'edit': {
					//Get the player id value as soon as possible, and convert the string value to number with the '+' operator
					const playerId: number = +params['playerId'];
					this.currentPlayer = this.playersService.getPlayerById(playerId);
					if (this.currentPlayer) {
						this.initializeForm(
							this.currentPlayer.playerId,
							this.currentPlayer.playerTeamId,
							this.currentPlayer.playerStatusId,
							this.currentPlayer.playerAbilityId,
							this.currentPlayer.playerFirstName,
							this.currentPlayer.playerLastName,
							this.currentPlayer.playerUniformNumber,
							this.currentPlayer.playerFieldPosition,
							this.currentPlayer.defaultPlayerFieldPosition
						);
					} else {
						this.initializeForm(
							-1,
							-1,
							-1,
							-1,
							'',
							'',
							'',
							PlayerFieldPositionEnum.UNKNOWN,
							PlayerFieldPositionEnum.UNKNOWN
						);
					}
					break;
				}
				case 'create': {
					this.initializeForm(
						-1,
						-1,
						-1,
						-1,
						'',
						'',
						'',
						PlayerFieldPositionEnum.UNKNOWN,
						PlayerFieldPositionEnum.UNKNOWN
					);
					break;
				}
			}
			//Detect changes on the form group (workaround to avoid the detection bug)
			this.changeDetectorRef.detectChanges();
			if (this.isInViewMode) {
				this.playerForm.disable();
			} else {
				this.playerForm.enable();
			}
		});
	}

	/**
	 * Initializes the player form
	 * @param playerId the player id
	 * @param playerTeamId  the player team id
	 * @param playerStatusId  the player status id
	 * @param playerAbilityId  the player ability id
	 * @param playerFirstName the player first name
	 * @param playerLastName the player last name
	 * @param playerUniformNumber the player uniform number
	 * @param playerFieldPosition the player field position
	 * @param defaultPlayerFieldPosition the default player position
	 */
	private initializeForm(
		playerId: number,
		playerTeamId: number,
		playerStatusId: number,
		playerAbilityId: number,
		playerFirstName: string,
		playerLastName: string,
		playerUniformNumber: string,
		playerFieldPosition: PlayerFieldPositionEnum,
		defaultPlayerFieldPosition: PlayerFieldPositionEnum
	): void {
		this.playerForm = new FormGroup({
			playerId: new FormControl(playerId, Validators.required),
			playerTeamId: new FormControl(playerTeamId, [
				Validators.required,
				this.isPlayerTeamIdValid.bind(this)
			]),
			playerStatusId: new FormControl(playerStatusId, [
				Validators.required,
				this.isPlayerStatusIdValid.bind(this)
			]),
			playerAbilityId: new FormControl(playerAbilityId, [Validators.required]),
			playerFirstName: new FormControl(playerFirstName, [Validators.required]),
			playerLastName: new FormControl(playerLastName, [Validators.required]),
			playerUniformNumber: new FormControl(playerUniformNumber, [
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(3),
				Validators.pattern(ValidatorConstants.UNIFORM_NUMBER_PATTERN),
				this.isPlayerUniformNumberValid.bind(this)
			]),
			playerFieldPosition: new FormControl(playerFieldPosition, [
				Validators.required,
				this.isPlayerFieldPositionValid.bind(this)
			]),
			defaultPlayerFieldPosition: new FormControl(defaultPlayerFieldPosition, [
				Validators.required,
				this.isPlayerFieldPositionValid.bind(this)
			])
		});
	}

	/**
	 * Gets the player field position list
	 * @returns the player field position list
	 */
	getPlayerFieldPositionList(): Array<string> {
		const playerPositionList: Array<string> = [];
		for (const value in PlayerFieldPositionEnum) {
			if (value !== PlayerFieldPositionEnum.UNKNOWN) {
				playerPositionList.push(value);
			}
		}
		return playerPositionList;
	}

	/**
	 * Gets the available team list
	 * @returns the available team list
	 */
	getAvailableTeamList(): Array<Team> {
		return this.teamsService.getTeams();
	}

	/**
	 *Define the actions to do during the team id field keyup event :
	 *filter the team list in order to display the autocomplete list
	 * @param typedValue
	 */
	onTeamIdFieldKeyup(typedValue: string): void {
		if (
			typedValue &&
			typeof typedValue === 'string' &&
			typedValue.length >= 1
		) {
			this.filterTeamList(typedValue);
		} else {
			this.filteredTeamList.splice(0, this.filteredTeamList.length);
		}
	}

	/**
	 * Filters the team list depending on the team id, the team full name or the team short name and save the result in the filtered team list
	 * @param filterValue the value use to filter the team list
	 */
	filterTeamList(filterValue: string): void {
		this.filteredTeamList = this.getAvailableTeamList().filter(
			(team) =>
				team.teamId === +filterValue ||
				team.teamFullName.toLowerCase().includes(filterValue.toLowerCase()) ||
				team.teamShortName.toLowerCase().includes(filterValue.toLowerCase())
		);
	}

	/**
	 *  Define the actions to do when the player team id value is selected from the autocomplete list
	 * @param playerTeamIdFieldReference the player team id reference
	 * @param teamId the team id value
	 */
	onSelectTeam(
		playerTeamIdFieldReference: HTMLInputElement,
		teamId: number
	): void {
		playerTeamIdFieldReference.value = teamId.toString();
		this.playerForm.get('playerTeamId')?.setValue(teamId.toString());
		this.filteredTeamList.splice(0, this.filteredTeamList.length);
	}

	/**
	 * Gets the available status list
	 * @returns available status list
	 */
	getAvailableStatusList(): Array<Status> {
		return this.statusesService.getStatuses();
	}

	/**
	 *Define the actions to do during the status id field keyup event :
	 *filter the status list in order to display the autocomplete list
	 * @param typedValue the typed value during the event trigger
	 */
	onStatusIdFieldKeyup(typedValue: string): void {
		if (
			typedValue &&
			typeof typedValue === 'string' &&
			typedValue.length >= 1
		) {
			this.filterStatusList(typedValue);
		} else {
			this.filteredStatusList.splice(0, this.filteredStatusList.length);
		}
	}

	/**
	 * Filters the status list depending on the status id or the profile name and save the result in the filtered status list
	 * @param filterValue the value used to filter the status list
	 */
	filterStatusList(filterValue: string): void {
		this.filteredStatusList = this.getAvailableStatusList().filter(
			(status) =>
				status.statusId === +filterValue ||
				status.profileName.toLowerCase().includes(filterValue.toLowerCase())
		);
	}

	/**
	 * Define the actions to do when the player status id value is selected from the autocomplet list
	 * @param playerStatusIdFieldReference the player status id field reference
	 * @param statusId the status id value
	 */
	onSelectStatus(
		playerStatusIdFieldReference: HTMLInputElement,
		statusId: number
	): void {
		playerStatusIdFieldReference.value = statusId.toString();
		this.playerForm.get('playerStatusId')?.setValue(statusId.toString());
		this.filteredStatusList.splice(0, this.filteredStatusList.length);
	}

	/**
	 * Gets the available player list
	 * @returns an available player list.
	 */
	getAvailablePlayerList(): Array<Player> {
		return this.playersService.getPlayers();
	}

	/**
	 * Determines whether the player field position is a valid one
	 * @param control the control to ckeck
	 * @returns a validation error if the player field position is not a valid one otherwise return null
	 */
	isPlayerFieldPositionValid(
		control: AbstractControl
	): ValidationErrors | null {
		if (!control.value) {
			return null;
		} else {
			if (this.getPlayerFieldPositionList().includes(control.value)) {
				return null;
			} else {
				return { fieldPositionValid: true };
			}
		}
	}

	/**
	 * Determines whether the player team id exists amids the teams available
	 * @param control the control to ckeck
	 * @returns a validation error if the player team id do not already exists otherwise return null
	 */
	isPlayerTeamIdValid(control: AbstractControl): ValidationErrors | null {
		if (!control.value) {
			return null;
		} else {
			if (
				this.getAvailableTeamList().some((team) => {
					return team.teamId === +control.value;
				})
			) {
				return null;
			} else {
				return { playerTeamIdValid: true };
			}
		}
	}

	/**
	 * Determines whether the player status id exists amids the status available
	 * @param control the control to ckeck
	 * @returns a validation error if the player status id do not already exists otherwise return null
	 */
	isPlayerStatusIdValid(control: AbstractControl): ValidationErrors | null {
		if (!control.value) {
			return null;
		} else {
			if (
				this.getAvailableStatusList().some((status) => {
					return status.statusId === +control.value;
				})
			) {
				return null;
			} else {
				return { playerStatusIdValid: true };
			}
		}
	}

	/**
	 * Determines whether player uniform number is unique inside the same team
	 * @param control the control to ckeck
	 * @returns a validation error object if the uniform number is not unique in the same team otherwise return null
	 */
	isPlayerUniformNumberValid(
		control: AbstractControl
	): ValidationErrors | null {
		if (!control.value) {
			return null;
		} else {
			if (!this.playerForm) {
				return null;
			}
			const currentPlayerTeamId: number = +this.playerForm.get('playerTeamId')
				?.value;
			const currentPlayerId: number = +this.playerForm.get('playerId')?.value;
			const currentPlayerTeamMates: Array<Player> = this.getAvailablePlayerList().filter(
				(player) => {
					return (
						player.playerTeamId === currentPlayerTeamId &&
						player.playerId !== currentPlayerId
					);
				}
			);

			if (
				currentPlayerTeamMates.some((player) => {
					return player.playerUniformNumber === control.value;
				})
			) {
				return { playerUniformNumberValid: true };
			} else {
				return null;
			}
		}
	}

	/**
	 * Determines what to do during submit :
	 * - Update or create a player element.
	 * - Navigate Back to the player list.
	 */
	onSubmit(): void {
		//Map the player object with the form values
		const playerToEdit: Player = new Player(
			+this.playerForm.value.playerId,
			+this.playerForm.value.playerTeamId,
			+this.playerForm.value.playerStatusId,
			+this.playerForm.value.playerAbilityId,
			this.playerForm.value.playerFirstName,
			this.playerForm.value.playerLastName,
			this.playerForm.value.playerUniformNumber,
			this.playerForm.value.playerFieldPosition,
			this.playerForm.value.defaultPlayerFieldPosition
		);

		if (this.isInCreateMode) {
			this.playersService.addPlayer(playerToEdit);
		} else {
			this.playersService.updatePlayer(playerToEdit);
		}

		this.onCancel();
	}

	/**
	 * Navigate back to player list view relative to the current route
	 */
	onCancel(): void {
		//Navigate back to the player list
		if (!this.isInCreateMode) {
			void this.router.navigate(['../../'], {
				relativeTo: this.activatedRoute,
				queryParamsHandling: 'merge'
			});
		} else {
			void this.router.navigate(['../'], {
				relativeTo: this.activatedRoute,
				queryParamsHandling: 'merge'
			});
		}
	}
}
