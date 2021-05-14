import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ValidatorConstants } from 'src/app/constants/validator-constant';
import { Player } from 'src/app/models/player.model';
import { Status } from 'src/app/models/status.model';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { PlayersService } from 'src/app/services/players.service';
import { StatusesService } from 'src/app/services/statuses.service';

/**
 * This class represent the status component.
 * @implements OnInit
 */
@Component({
	selector: 'app-status',
	templateUrl: './status.component.html',
	styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
	/**
	 * The current status to be displayed
	 */
	public currentStatus: Status | null = null;

	/**
	 * Status reactive form object
	 */
	public statusForm!: FormGroup;

	/**
	 * Determines whether in view mode or edit mode
	 */
	public isInViewMode: boolean = false;

	/**
	 * Determines whether in create mode
	 */
	public isInCreateMode: boolean = false;

	/**
	 * Validator constants of team component
	 */
	public validatorConstants = ValidatorConstants;

	/**
	 * Filtered player list of status component
	 */
	public filteredPlayerList: Array<Player> = [];

	/**
	 * Creates an instance of status component.
	 * @constructor
	 * @param statusesService  the status service injected
	 * @param activatedRoute the activated route
	 * @param changeDetectorRef the change detector reference
	 * @param router the router
	 * @param formValidationService the form validation service
	 */
	constructor(
		private statusesService: StatusesService,
		private activatedRoute: ActivatedRoute,
		private changeDetectorRef: ChangeDetectorRef,
		private router: Router,
		public formValidationService: FormValidationService,
		private playersService: PlayersService
	) {}

	/**
	 * Initialize the current displayed status by getting the url parameter.
	 * Also a subscribtion to the parameter change is done in order to update the current displayed status whe needed.
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
					//Get the status id value as soon as possible, and convert the string value to number with the '+' operator
					const statusId: number = +params['statusId'];
					this.currentStatus = this.statusesService.getStatusById(statusId);
					if (this.currentStatus) {
						this.initializeForm(
							this.currentStatus.statusId,
							this.currentStatus.playerId,
							this.currentStatus.profileName,
							this.currentStatus.speed,
							this.currentStatus.stamina,
							this.currentStatus.catchEfficiency,
							this.currentStatus.pitchEfficiency,
							this.currentStatus.passEfficiency,
							this.currentStatus.battingEfficiency,
							this.currentStatus.battingPower,
							this.currentStatus.pitchingPower,
							this.currentStatus.pitchingEffect
						);
					} else {
						this.initializeForm(-1, -1, '', 0, 0, 0, 0, 0, 0, 0, 0, 0);
					}
					break;
				}
				case 'create': {
					this.initializeForm(-1, -1, '', 0, 0, 0, 0, 0, 0, 0, 0, 0);
					break;
				}
			}
			//Detect changes on the form group (workaround to avoid the detection bug)
			this.changeDetectorRef.detectChanges();
			if (this.isInViewMode) {
				this.statusForm.disable();
			} else {
				this.statusForm.enable();
			}
		});
	}

	/**
	 * Initializes the status form
	 * @param statusId  the status id
	 * @param playerId the player id
	 * @param profileName the profile name
	 * @param speed the player speed
	 * @param stamina the player stamina
	 * @param catchEfficiency the player catch efficiency
	 * @param pitchEfficiency the player pitch efficiency
	 * @param passEfficiency the player pass efficiency
	 * @param battingEfficiency the player bat efficiency
	 * @param battingPower the player batting power
	 * @param pitchingPower the player pitching power
	 * @param pitchingEffect the player pitching effect
	 */
	private initializeForm(
		statusId: number,
		playerId: number,
		profileName: string,
		speed: number,
		stamina: number,
		catchEfficiency: number,
		pitchEfficiency: number,
		passEfficiency: number,
		battingEfficiency: number,
		battingPower: number,
		pitchingPower: number,
		pitchingEffect: number
	): void {
		this.statusForm = new FormGroup({
			statusId: new FormControl(statusId, Validators.required),
			playerId: new FormControl(playerId, []),
			profileName: new FormControl(profileName, [Validators.required]),
			speed: new FormControl(speed, []),
			stamina: new FormControl(stamina, []),
			catchEfficiency: new FormControl(catchEfficiency, []),
			pitchEfficiency: new FormControl(pitchEfficiency, []),
			passEfficiency: new FormControl(passEfficiency, []),
			battingEfficiency: new FormControl(battingEfficiency, []),
			battingPower: new FormControl(battingPower, []),
			pitchingPower: new FormControl(pitchingPower, []),
			pitchingEffect: new FormControl(pitchingEffect, [])
		});
	}

	/**
	 *Define the actions to do during the player id field keyup event :
	 *filter the player list in order to display the autocomplete list
	 * @param typedValue the player id field typed value
	 */
	onPlayerIdFieldKeyup(typedValue: string): void {
		if (
			typedValue &&
			typeof typedValue === 'string' &&
			typedValue.length >= 1
		) {
			this.filterPlayerList(typedValue);
		} else {
			this.filteredPlayerList.splice(0, this.filteredPlayerList.length);
		}
	}

	/**
	 * Filters the player list depending on the player id, the player full name or the player short name and save the result in the filtered player list
	 * @param filterValue the value use to filter the player list
	 */
	filterPlayerList(filterValue: string): void {
		this.filteredPlayerList = this.playersService
			.getPlayers()
			.filter(
				(player) =>
					player.playerId === +filterValue ||
					player.playerFirstName
						.toLowerCase()
						.includes(filterValue.toLowerCase()) ||
					player.playerLastName
						.toLowerCase()
						.includes(filterValue.toLowerCase())
			);
	}

	/**
	 *  Define the actions to do when the player id value is selected from the autocomplete list
	 * @param playerIdFieldReference the player id reference
	 * @param playerId the player id value
	 */
	onSelectPlayer(
		playerIdFieldReference: HTMLInputElement,
		playerId: number
	): void {
		playerIdFieldReference.value = playerId.toString();
		this.statusForm.get('playerId')?.setValue(playerId.toString());
		this.filteredPlayerList.splice(0, this.filteredPlayerList.length);
	}

	/**
	 * Determines what to do during submit :
	 * - Update or create a status element.
	 * - Navigate Back to the status list.
	 */
	onSubmit(): void {
		//Map the status object with the form values
		const statusToEdit: Status = new Status(
			this.statusForm.value.statusId,
			this.statusForm.value.playerId,
			this.statusForm.value.profileName,
			this.statusForm.value.speed,
			this.statusForm.value.stamina,
			this.statusForm.value.catchEfficiency,
			this.statusForm.value.pitchEfficiency,
			this.statusForm.value.passEfficiency,
			this.statusForm.value.battingEfficiency,
			this.statusForm.value.battingPower,
			this.statusForm.value.pitchingPower,
			this.statusForm.value.pitchingEffect
		);

		if (this.isInCreateMode) {
			this.statusesService.addStatus(statusToEdit);
		} else {
			this.statusesService.updateStatus(statusToEdit);
		}

		this.onCancel();
	}

	/**
	 * Navigate back to status list view relative to the current route
	 */
	onCancel(): void {
		//Navigate back to the status list
		if (!this.isInCreateMode) {
			void this.router.navigate(['../../'], {
				relativeTo: this.activatedRoute
			});
		} else {
			void this.router.navigate(['../'], {
				relativeTo: this.activatedRoute
			});
		}
	}
}
