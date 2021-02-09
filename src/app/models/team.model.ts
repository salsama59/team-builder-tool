/**
 * This class represent the team model.
 */
export class Team {
    /**
     * Creates an instance of team.
     * @param teamId the team id
     * @param teamFullName the team full name
     * @param teamShortName the team short name
     */
    constructor(public teamId: number, public teamFullName: string, public teamShortName: string) { }
}