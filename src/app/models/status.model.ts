/**
 * This class represent the status model.
 */
export class Status {

    /**
     * Creates an instance of status.
     * @constructor
     * @param statusId  the status id
     * @param playerId the player id
     * @param speed the player speed
     * @param stamina the player stamina
     * @param catchEfficiency the player catch efficiency
     * @param pitchEfficiency the player pitch efficiency
     * @param passEfficiency the player pass efficiency
     * @param battingEfficiency the player bat efficiency
     * @param battingPower the player batting power
     * @param pitchingPower the player pitching power
     * @param pitchingEffect the player pitching effect
     */
    constructor(public statusId: number
        , public playerId: number
        , public speed: number
        , public stamina: number
        , public catchEfficiency: number
        , public pitchEfficiency: number
        , public passEfficiency: number
        , public battingEfficiency: number
        , public battingPower: number
        , public pitchingPower: number
        , public pitchingEffect: number) { }
}