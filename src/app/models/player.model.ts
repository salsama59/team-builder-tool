import { PlayerFieldPositionEnum } from '../enums/player-field-position.enum';

/**
 * This class represent the player model.
 */
export class Player {
	/**
	 * Creates an instance of player.
	 * @constructor
	 * @param playerId  the player id
	 * @param playerTeamId the player team id
	 * @param playerStatusId the player status id
	 * @param playerAbilityId the player abiity id
	 * @param playerFirstName the player first name
	 * @param playerLastName the player last name
	 * @param playerUniformNumber the player uniform number
	 * @param playerFieldPosition the player field position
	 * @param defaultPlayerFieldPosition the player default field position
	 */
	constructor(
		public playerId: number,
		public playerTeamId: number,
		public playerStatusId: number,
		public playerAbilityId: number,
		public playerFirstName: string,
		public playerLastName: string,
		public playerUniformNumber: string,
		public playerFieldPosition: PlayerFieldPositionEnum,
		public defaultPlayerFieldPosition: PlayerFieldPositionEnum
	) {}
}
