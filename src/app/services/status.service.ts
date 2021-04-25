import { Injectable } from '@angular/core';
import { Status } from '../models/status.model';

/**
 * This class represent the status service providing various operation over the status resource.
 */
@Injectable({
	providedIn: 'root'
})
export class StatusService {
	/**
	 * The status list.
	 * @type {Array<Status>}
	 * @private
	 */
	private status: Array<Status> = [
		new Status(0, 0, 'test', 10, 27, 60.5, 70.5, 45, 5, 50, 78, 15)
	];

	/**
	 * Get a status given an id
	 * @param statusId the status id to get
	 * @returns a status corresponding to the id.
	 */
	getStatusById(statusId: number): Status {
		return this.status[statusId];
	}

	/**
	 * Get the status list
	 * @returns a status list
	 */
	getStatuses(): Array<Status> {
		return this.status.slice();
	}

	/**
	 * Add a status to the status list
	 * @param statusToAdd  the status element to add
	 */
	addStatus(statusToAdd: Status): void {
		this.status.push(statusToAdd);
	}

	/**
	 * Update a status with the given informations as parameter.
	 * @param statusToUpdate the status information which must be used to update the target status.
	 * @returns the status updated.
	 */
	updateStatus(statusToUpdate: Status): Status {
		this.status[statusToUpdate.statusId] = statusToUpdate;
		return this.getStatusById(statusToUpdate.statusId);
	}

	/**
	 * Delete a status given an id
	 * @param statusIdToDelete the status id to delete.
	 */
	deleteStatusById(statusIdToDelete: number): void {
		this.status.splice(statusIdToDelete, 1);
	}
}
