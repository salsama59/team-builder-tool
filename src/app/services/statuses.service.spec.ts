import { TestBed } from '@angular/core/testing';
import { Status } from '../models/status.model';
import { MockStatusesService } from '../unit-testing/mock-statuses-service';

import { StatusesService } from './statuses.service';

describe('StatusesService', () => {
	let statusesService: StatusesService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		statusesService = TestBed.inject(MockStatusesService);
	});

	it('should be created', () => {
		expect(statusesService).toBeTruthy();
	});

	it('should return a list of status', () => {
		expect(statusesService.getStatuses().length).toBeCloseTo(1);
	});

	it('should return a status element', () => {
		expect(statusesService.getStatusById(0)).toEqual(
			new Status(0, 0, 'test', 10, 27, 60.5, 70.5, 45, 5, 50, 78, 15)
		);
	});

	it('should add a new status element', () => {
		const newAddedStatus: Status = new Status(
			1,
			1,
			'essai',
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
		statusesService.addStatus(newAddedStatus);
		expect(statusesService.getStatuses().length).toBeCloseTo(2);
		expect(statusesService.getStatuses()).toContain(newAddedStatus);
	});

	it('should delete a status element', () => {
		const statusToBeDeleted: Status = <Status>statusesService.getStatusById(0);
		statusesService.deleteStatusById(0);
		expect(statusesService.getStatuses().length).toBeCloseTo(0);
		expect(statusesService.getStatuses()).not.toContain(statusToBeDeleted);
	});

	it('should update a status element', () => {
		const statusToBeUpdated: Status = <Status>statusesService.getStatusById(0);
		statusToBeUpdated.speed = 0;
		statusToBeUpdated.stamina = 0;
		statusesService.updateStatus(statusToBeUpdated);
		expect(statusesService.getStatuses()).toContain(statusToBeUpdated);
	});
});
