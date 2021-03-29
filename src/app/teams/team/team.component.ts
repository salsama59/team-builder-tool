import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ValidatorConstants } from 'src/app/constants/validator-constant';
import { Team } from 'src/app/models/team.model';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { TeamsService } from 'src/app/services/teams.service';

/**
 * This class represent the team component.
 * @implements OnInit
 */
@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
	/**
	 * The current team to be displayed
	 */
	public currentTeam: Team | null = null;

	/**
	 * Team reactive form object
	 */
	public teamForm!: FormGroup;

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
	 * Creates an instance of team component.
	 * @constructor
	 * @param teamsService  the teams service injected
	 * @param activatedRoute the activated route
	 * @param changeDetectorRef the component change detector
	 * @param formValidationService the form validation service
	 * @param router the router to navigate throught pages
	 */
	constructor(
		private teamsService: TeamsService,
		private activatedRoute: ActivatedRoute,
		private changeDetectorRef: ChangeDetectorRef,
		public formValidationService: FormValidationService,
		private router: Router
	) {}

	/**
	 * Initialize the current displayed team form by getting the url parameters.
	 * Also a subscribtion to the parameter change is done in order to update the current displayed team whe needed.
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
					//Get the team id value as soon as possible using the snapshot property, and convert the string value to number with the '+' operator
					const teamId: number = +params['teamId'];
					this.currentTeam = this.teamsService.getTeamById(teamId);
					this.initializeForm(
						this.currentTeam.teamId,
						this.currentTeam.teamFullName,
						this.currentTeam.teamShortName
					);
					break;
				}
				case 'create': {
					this.initializeForm(-1, null, null);
					break;
				}
				default:
					break;
			}
			//Detect changes on the form group (workaround to avoid the detection bug)
			this.changeDetectorRef.detectChanges();
			if (this.isInViewMode) {
				this.teamForm.disable();
			} else {
				this.teamForm.enable();
			}
		});
	}

	/**
	 * Initializes the team form group given the fields value
	 * @param teamId the team id
	 * @param teamFullName the team full name
	 * @param teamShortName the team short name
	 */
	private initializeForm(
		teamId: number | null,
		teamFullName: string | null,
		teamShortName: string | null
	) {
		this.teamForm = new FormGroup({
			teamId: new FormControl(teamId, Validators.required),
			teamFullName: new FormControl(teamFullName, Validators.required),
			teamShortName: new FormControl(teamShortName, [
				Validators.required,
				Validators.maxLength(6)
			])
		});
	}

	/**
	 * Determines what to do during submit :
	 * - Update or create a team element.
	 * - Navigate Back to the team list.
	 */
	onSubmit(): void {
		//Map the team object with the form values
		const teamToEdit: Team = new Team(
			this.teamForm.value.teamId,
			this.teamForm.value.teamFullName,
			this.teamForm.value.teamShortName
		);

		if (this.isInCreateMode) {
			this.teamsService.addTeam(teamToEdit);
		} else {
			this.teamsService.updateTeam(teamToEdit);
		}

		this.onCancel();
	}

	/**
	 * Navigate back to team list view relative to the current route
	 */
	onCancel(): void {
		//Navigate back to the team list
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
