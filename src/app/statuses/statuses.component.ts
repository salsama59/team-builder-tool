import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Status } from '../models/status.model';
import { StatusesService } from '../services/statuses.service';

/**
 * This class represent the statuses component.
 * @implements OnInit
 */
@Component({
	selector: 'app-statuses',
	templateUrl: './statuses.component.html',
	styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit, OnDestroy {
	/**
	 * The status list that will be displayed.
	 * @type {Array<Status> | null}
	 * @public
	 */
	public statuses: Array<Status> | null = null;

	/**
	 * Players changed subscription of players component
	 */
	private statusesChangedSubscription!: Subscription;

	/**
	 * Creates an instance of statuses component.
	 * @constructor
	 * @param statusesService the statuses service injected
	 * @param router the router injected
	 * @param activatedRoute the activated route injected
	 */
	constructor(
		private statusesService: StatusesService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	/**
	 * Initialize the status list.
	 */
	ngOnInit(): void {
		this.statuses = this.statusesService.getStatuses();
		this.statusesChangedSubscription = this.statusesService.statusesChanged.subscribe(
			(newStatuses) => {
				this.statuses = newStatuses;
			}
		);
	}

	/**
	 * Unsubscribe to the statuses changed subscription
	 */
	ngOnDestroy(): void {
		this.statusesChangedSubscription.unsubscribe();
	}

	/**
	 * Display the status element given an id by routing the user to the StatusComponent view
	 * @param statusId the status id.
	 */
	onViewStatusElement(statusId: number): void {
		void this.router.navigate([statusId, 'view'], {
			relativeTo: this.activatedRoute
		});
	}

	/**
	 * Edit the status element given an id by routing the user to the StatusComponent edition view
	 * @param statusId the status id.
	 */
	onEditStatusElement(statusId: number): void {
		void this.router.navigate([statusId, 'edit'], {
			relativeTo: this.activatedRoute
		});
	}

	/**
	 * Display the new status creation form by routing the user to the StatusComponent view
	 */
	onCreateStatusElement(): void {
		void this.router.navigate(['create'], {
			relativeTo: this.activatedRoute
		});
	}

	/**
	 * Delete the a status element given it's index.
	 * Reload the current view
	 * @param statusIndex the status index
	 */
	onDeleteStatusElement(statusIndex: number): void {
		this.statusesService.deleteStatusById(statusIndex);
		void this.router.navigate(['.'], {
			relativeTo: this.activatedRoute
		});
	}
}
