import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Status } from '../models/status.model';
import { StatusService } from '../services/status.service';

/**
 * This class represent the statuses component.
 * @implements OnInit
 */
@Component({
	selector: 'app-statuses',
	templateUrl: './statuses.component.html',
	styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {
	/**
	 * The status list that will be displayed.
	 * @type {Array<Status> | null}
	 * @public
	 */
	public statuses: Array<Status> | null = null;

	/**
	 * Creates an instance of statuses component.
	 * @constructor
	 * @param statusService the statuses service injected
	 * @param router the router injected
	 * @param activatedRoute the activated route injected
	 */
	constructor(
		private statusService: StatusService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	/**
	 * Initialize the status list.
	 */
	ngOnInit(): void {
		this.statuses = this.statusService.getStatuses();
	}

	/**
	 * Display the status element given an id by routing the user to the StatusComponent view
	 * @param statusId the status id.
	 */
	onViewStatusElement(statusId: number): void {
		void this.router.navigate([statusId], {
			relativeTo: this.activatedRoute
		});
	}
}
