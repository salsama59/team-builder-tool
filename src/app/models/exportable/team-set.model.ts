import { Team } from '../team.model';
import { PlayerSet } from './player-set.model';

/**
 * This class represent the team set model
 */
export class TeamSet extends Team {
	/**
	 * Creates an instance of team set.
	 * @constructor
	 * @param teamId the team id
	 * @param teamFullName the team full name
	 * @param teamShortName the team short name
	 * @param players the team players
	 */
	public constructor(
		public teamId: number,
		public teamFullName: string,
		public teamShortName: string,
		public players: Array<PlayerSet>
	) {
		super(teamId, teamFullName, teamShortName);
	}
}
