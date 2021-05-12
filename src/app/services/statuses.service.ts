import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Status } from '../models/status.model';

/**
 * This class represent the statuses service providing various operation over the status resource.
 */
@Injectable({
	providedIn: 'root'
})
export class StatusesService {
	/**
	 * The status list.
	 * @type {Array<Status>}
	 * @private
	 */
	private statuses: Array<Status> = [
		new Status(0, 0, 'test', 10, 27, 60.5, 70.5, 45, 5, 50, 78, 15)
	];

	/**
	 * Statuses changed event
	 */
	public statusesChanged: Subject<Array<Status>> = new Subject<Array<Status>>();

	/**
	 * Get a status given an id
	 * @param statusId the status id to get
	 * @returns a status corresponding to the id.
	 */
	getStatusById(statusId: number): Status | null {
		const resultStatus: Status | undefined = this.statuses.find(
			(status) => status.statusId === statusId
		);
		return resultStatus ? resultStatus : null;
	}

	/**
	 * Get the status list
	 * @returns a status list
	 */
	getStatuses(): Array<Status> {
		return this.statuses.slice();
	}

	/**
	 * Add a status to the status list
	 * @param statusToAdd  the status element to add
	 */
	addStatus(statusToAdd: Status): void {
		const nextStatusId = this.statuses.length;
		statusToAdd.statusId = nextStatusId;
		this.statuses.push(statusToAdd);
		this.statusesChanged.next(this.getStatuses());
	}

	/**
	 * Update a status with the given informations as parameter.
	 * @param statusToUpdate the status information which must be used to update the target status.
	 * @returns the status updated.
	 */
	updateStatus(statusToUpdate: Status): Status {
		this.statuses[statusToUpdate.statusId] = statusToUpdate;
		this.statusesChanged.next(this.getStatuses());
		return this.statuses[statusToUpdate.statusId];
	}

	/**
	 * Delete a status given an id
	 * @param statusIdToDelete the status id to delete.
	 */
	deleteStatusById(statusIdToDelete: number): void {
		this.statuses.splice(statusIdToDelete, 1);
		this.statusesChanged.next(this.getStatuses());
	}
}
