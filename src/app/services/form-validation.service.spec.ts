import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorConstants } from '../constants/validator-constant';

import { FormValidationService } from './form-validation.service';

describe('FormValidationService', () => {
	let formValidationService: FormValidationService;
	let formGroup: FormGroup;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		formValidationService = TestBed.inject(FormValidationService);
		formGroup = new FormGroup({
			testControl: new FormControl(null, Validators.required),
			anotherTestControl: new FormControl(null)
		});
		formGroup.controls['testControl'].setErrors({ required: true });
	});

	it('should be created', () => {
		expect(formValidationService).toBeTruthy();
	});

	it('should verify error type', () => {
		expect(
			formValidationService.hasErrorType(
				formGroup.get('testControl'),
				ValidatorConstants.REQUIRED_ERROR_TYPE
			)
		).toBeTruthy();

		expect(
			formValidationService.hasErrorType(
				formGroup.get('anotherTestControl'),
				ValidatorConstants.REQUIRED_ERROR_TYPE
			)
		).toBeFalsy();
	});

	it('should get an error type', () => {
		expect(
			formValidationService.getError(
				formGroup.get('testControl'),
				ValidatorConstants.REQUIRED_ERROR_TYPE
			)
		).toBeTruthy();

		expect(
			formValidationService.getError(
				formGroup.get('anotherTestControl'),
				ValidatorConstants.REQUIRED_ERROR_TYPE
			)
		).toBeFalsy();
	});
});
