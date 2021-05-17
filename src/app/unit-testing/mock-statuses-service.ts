import { Injectable } from '@angular/core';
import { Status } from '../models/status.model';
import { LocalStorageService } from '../services/local-storage.service';
import { StatusesService } from '../services/statuses.service';

@Injectable({
	providedIn: 'root'
})
export class MockStatusesService extends StatusesService {
	/**
	 * The status list.
	 * @type {Array<Status>}
	 * @protected
	 */
	protected statuses: Array<Status> = [
		new Status(0, 0, 'test', 10, 27, 60.5, 70.5, 45, 5, 50, 78, 15)
	];

	constructor(localStorageService: LocalStorageService) {
		super(localStorageService);
	}
}
