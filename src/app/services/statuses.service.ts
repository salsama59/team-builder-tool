import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageConstants } from '../constants/local-storage-constants';
import { Status } from '../models/status.model';
import { LocalStorageService } from './local-storage.service';

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
	 * @protected
	 */
	protected statuses: Array<Status> = new Array<Status>();

	/**
	 * Statuses changed event
	 */
	public statusesChanged: Subject<Array<Status>> = new Subject<Array<Status>>();

	/**
	 * Status id sequence of statuses service
	 */
	private statusIdSequence: number = -1;

	/**
	 * Creates an instance of statuses service.
	 * Try to get the status list from the local storage, if there is datas updates the status list.
	 * @param localStorageService the local storage service
	 */
	constructor(private localStorageService: LocalStorageService) {
		const statusesStringData: string | null = this.localStorageService.getData(
			LocalStorageConstants.STATUSES_DATA_KEY
		);
		if (statusesStringData) {
			this.statuses = <Array<Status>>JSON.parse(statusesStringData);
		}

		const currentSequenceNumber:
			| string
			| null = this.localStorageService.getData(
			LocalStorageConstants.STATUS_ID_SEQUENCE_KEY
		);

		if (currentSequenceNumber) {
			this.statusIdSequence = +currentSequenceNumber;
		}
	}

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
		const nextStatusId = this.getNextStatusIdSequence();
		statusToAdd.statusId = nextStatusId;
		this.statuses.push(statusToAdd);
		this.statusesChanged.next(this.getStatuses());
		this.setStatusIdSequence(nextStatusId);
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

	/**
	 * Gets next status id sequence
	 * @returns next status id sequence
	 */
	private getNextStatusIdSequence(): number {
		return this.statusIdSequence + 1;
	}

	/**
	 * Sets the status id sequence
	 * @param newSequenceValue the new sequence value to set
	 */
	private setStatusIdSequence(newSequenceValue: number): void {
		this.statusIdSequence = newSequenceValue;
		this.localStorageService.setData(
			LocalStorageConstants.STATUS_ID_SEQUENCE_KEY,
			newSequenceValue.toString()
		);
	}
}
