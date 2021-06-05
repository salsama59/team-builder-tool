import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageConstants } from '../constants/local-storage-constants';
import { Status } from '../models/status.model';
import { LocalStorageService } from '../services/local-storage.service';
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
	 * Maximum status per page count
	 */
	public maximumStatusPerPageCount: number = 5;

	/**
	 * Current status page
	 */
	private currentStatusPage: number = 1;

	/**
	 * Creates an instance of statuses component.
	 * @constructor
	 * @param statusesService the statuses service injected
	 * @param router the router injected
	 * @param activatedRoute the activated route injected
	 * @param localStorageService the local storage service injected
	 */
	constructor(
		public statusesService: StatusesService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private localStorageService: LocalStorageService
	) {}

	/**
	 * Initialize the status list.
	 * Subscribe to the statuses modifications and save the datas to the localstorage.
	 */
	ngOnInit(): void {
		this.paginateStatuses('1');
		void this.router.navigate([], {
			relativeTo: this.activatedRoute,
			queryParams: { page: '1' }
		});

		this.activatedRoute.queryParams.subscribe((params: Params) => {
			this.paginateStatuses(params['page']);
		});

		this.statusesChangedSubscription = this.statusesService.statusesChanged.subscribe(
			(newStatuses) => {
				this.statuses = newStatuses;
				this.localStorageService.setData(
					LocalStorageConstants.STATUSES_DATA_KEY,
					JSON.stringify(this.statuses)
				);
				this.paginateStatuses(this.currentStatusPage);
			}
		);
	}

	/**
	 * Paginates the status list given a page number
	 * @param pageNumber the page number
	 */
	paginateStatuses(pageNumber: string | number | undefined | null): void {
		if (pageNumber) {
			const newPageTotal: number = Math.ceil(
				this.statusesService.getStatuses().length /
					this.maximumStatusPerPageCount
			);

			if (newPageTotal < +pageNumber) {
				pageNumber = newPageTotal.toString();
			}

			const start: number =
				this.maximumStatusPerPageCount * +pageNumber -
				this.maximumStatusPerPageCount;
			const end: number = this.maximumStatusPerPageCount * +pageNumber;
			this.statuses = this.statusesService.getStatuses().slice(start, end);
		}
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
			relativeTo: this.activatedRoute,
			queryParamsHandling: 'merge'
		});
	}

	/**
	 * Edit the status element given an id by routing the user to the StatusComponent edition view
	 * @param statusId the status id.
	 */
	onEditStatusElement(statusId: number): void {
		void this.router.navigate([statusId, 'edit'], {
			relativeTo: this.activatedRoute,
			queryParamsHandling: 'merge'
		});
	}

	/**
	 * Display the new status creation form by routing the user to the StatusComponent view
	 */
	onCreateStatusElement(): void {
		void this.router.navigate(['create'], {
			relativeTo: this.activatedRoute,
			queryParamsHandling: 'merge'
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
			relativeTo: this.activatedRoute,
			queryParams: { page: this.currentStatusPage },
			queryParamsHandling: 'merge'
		});
	}
}
