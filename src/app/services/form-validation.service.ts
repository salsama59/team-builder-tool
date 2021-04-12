import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Form validation service, providing method for validation purpose.
 */
@Injectable({
	providedIn: 'root'
})
export class FormValidationService {
	/**
	 * Determines whether a form control has an error type
	 * @param control the control to check
	 * @param errorType the error type to search for
	 * @returns true if the control posess the error type, otherwise return false
	 */
	hasErrorType(control: AbstractControl | null, errorType: string): boolean {
		if (control && control.errors && control.errors[errorType]) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Get the form control error given the error type
	 * @param control the control from wich the error is extracted
	 * @param errorType the error type to get
	 * @returns a validation errors object
	 */
	getError(
		control: AbstractControl | null,
		errorType: string
	): ValidationErrors | null {
		if (control && control.errors && control.errors[errorType]) {
			return <ValidationErrors>control.errors[errorType];
		} else {
			return null;
		}
	}
}
