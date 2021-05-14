import { PlayerFieldPositionEnum } from '../../enums/player-field-position.enum';
import { Player } from '../player.model';
import { Status } from '../status.model';

/**
 * This class represent the player set model.
 */
export class PlayerSet extends Player {
	/**
	 * Creates an instance of playerSet.
	 * @constructor
	 * @param playerId  the player id
	 * @param playerTeamId the player team id
	 * @param playerStatusId the player status id
	 * @param playerStatus the player status
	 * @param playerAbilityId the player abiity id
	 * @param playerFirstName the player first name
	 * @param playerLastName the player last name
	 * @param playerUniformNumber the player uniform number
	 * @param playerFieldPosition the player field position
	 * @param defaultPlayerFieldPosition the player default field position
	 */
	public constructor(
		public playerId: number,
		public playerTeamId: number,
		public playerStatusId: number,
		public playerStatus: Status,
		public playerAbilityId: number,
		public playerFirstName: string,
		public playerLastName: string,
		public playerUniformNumber: string,
		public playerFieldPosition: PlayerFieldPositionEnum,
		public defaultPlayerFieldPosition: PlayerFieldPositionEnum
	) {
		super(
			playerId,
			playerTeamId,
			playerStatusId,
			playerAbilityId,
			playerFirstName,
			playerLastName,
			playerUniformNumber,
			playerFieldPosition,
			defaultPlayerFieldPosition
		);
	}
}
