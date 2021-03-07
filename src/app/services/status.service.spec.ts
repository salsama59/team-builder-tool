import { TestBed } from '@angular/core/testing';
import { Status } from '../models/status.model';

import { StatusService } from './status.service';

describe('StatusService', () => {
	let statusService: StatusService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		statusService = TestBed.inject(StatusService);
	});

	it('should be created', () => {
		expect(statusService).toBeTruthy();
	});

	it('should return a list of status', () => {
		expect(statusService.getStatuses().length).toBeCloseTo(1);
	});

	it('should return a status element', () => {
		expect(statusService.getStatusById(0)).toEqual(
			new Status(0, 0, 10, 27, 60.5, 70.5, 45, 5, 50, 78, 15)
		);
	});

	it('should add a new status element', () => {
		const newAddedStatus: Status = new Status(
			1,
			1,
			10,
			30,
			6.5,
			70.5,
			46,
			10,
			50,
			80,
			15
		);
		statusService.addStatus(newAddedStatus);
		expect(statusService.getStatuses().length).toBeCloseTo(2);
		expect(statusService.getStatuses()).toContain(newAddedStatus);
	});

	it('should delete a status element', () => {
		statusService.deleteStatusById(0);
		expect(statusService.getStatuses().length).toBeCloseTo(0);
		expect(statusService.getStatuses()).not.toContain(
			new Status(0, 0, 10, 27, 60.5, 70.5, 45, 5, 50, 78, 15)
		);
	});
});
