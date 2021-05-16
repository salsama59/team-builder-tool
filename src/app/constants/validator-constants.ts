/**
 * Validator constants class meant to store validator related data
 */
export class ValidatorConstants {
	/**
	 * Contains the required error type key
	 */
	public static REQUIRED_ERROR_TYPE: string = 'required';
	/**
	 * Contains the max length error type key
	 */
	public static MAX_LENGTH_ERROR_TYPE: string = 'maxlength';
	/**
	 * Contains the min length error type key
	 */
	public static MIN_LENGTH_ERROR_TYPE: string = 'minlength';
	/**
	 * Contains the pattern error type key
	 */
	public static PATTERN_ERROR_TYPE: string = 'pattern';
	/**
	 * Contains the player team id valid error type key
	 */
	public static PLAYER_TEAM_ID_VALID_ERROR_TYPE: string = 'playerTeamIdValid';
	/**
	 * Contains the player status id valid error type key
	 */
	public static PLAYER_STATUS_ID_VALID_ERROR_TYPE: string =
		'playerStatusIdValid';
	/**
	 * Contains the field position valid error type key
	 */
	public static FIELD_POSITION_VALID_ERROR_TYPE: string = 'fieldPositionValid';
	/**
	 * Contains the player uniform number valid error type key
	 */
	public static PLAYER_UNIFORM_NUMBER_VALID_ERROR_TYPE: string =
		'playerUniformNumberValid';

	/**
	 * contains the uniform number pattern for validation purposes.
	 */
	public static UNIFORM_NUMBER_PATTERN: RegExp = /^[0-9]+$/;
}
