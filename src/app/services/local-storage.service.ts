import { Injectable } from '@angular/core';

/**
 * Service class to do operations on the local storage
 */
@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {
	/**
	 * Gets the data from the local storage
	 * @param dataKey the data key
	 * @returns the local storage data
	 */
	getData(dataKey: string): string | null {
		return localStorage.getItem(dataKey);
	}

	/**
	 * Sets the data from the local storage.
	 * If the data key exit an update is done, otherwise the data is created.
	 * @param dataKey the data key to set
	 * @param data the data to set
	 */
	setData(dataKey: string, data: string): void {
		localStorage.setItem(dataKey, data);
	}

	/**
	 * Deletes data from the local storage
	 * @param dataKey the data key to delete
	 */
	deleteData(dataKey: string): void {
		localStorage.removeItem(dataKey);
	}

	/**
	 * Clears all datas from the local storage
	 */
	clearAllDatas(): void {
		localStorage.clear();
	}
}
