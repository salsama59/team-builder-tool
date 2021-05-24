import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LocalStorageConstants } from '../constants/local-storage-constants';
import { PlayerSet } from '../models/exportable/player-set.model';
import { TeamSet } from '../models/exportable/team-set.model';
import { Player } from '../models/player.model';
import { Status } from '../models/status.model';
import { Team } from '../models/team.model';
import { LocalStorageService } from '../services/local-storage.service';

/**
 * Models exporter component responsible for the model preview build and the exportable json link creation.
 */
@Component({
	selector: 'app-models-exporter',
	templateUrl: './models-exporter.component.html',
	styleUrls: ['./models-exporter.component.css']
})
export class ModelsExporterComponent implements OnInit {
	/**
	 * Exportable json of models exporter component
	 */
	exportableJson: string = '';

	/**
	 * Json uri of models exporter component
	 */
	jsonUri: SafeUrl = '';

	/**
	 * Creates an instance of models exporter component.
	 * @constructor
	 * @param localStorageService the local storage service
	 * @param domSanitizer the dom sanitizer
	 */
	constructor(
		private localStorageService: LocalStorageService,
		private domSanitizer: DomSanitizer
	) {}

	/**
	 * Populate the exportable model by getting the teams, players and statuses models.
	 * Also convert the model to a prettified string then generate the safe uri to download it.
	 */
	ngOnInit(): void {
		//Get the teams data from the storage and convert it to the Team object array instance
		const storedTeamsString: string | null = this.localStorageService.getData(
			LocalStorageConstants.TEAMS_DATA_KEY
		);
		let teamList: Array<Team> = new Array<Team>();
		if (storedTeamsString) {
			teamList = <Array<Team>>JSON.parse(storedTeamsString);
		}

		//Get the players data from the storage and convert it to the Player object array instance
		const storedPlayersString: string | null = this.localStorageService.getData(
			LocalStorageConstants.PLAYERS_DATA_KEY
		);
		let playerList: Array<Player> = new Array<Player>();
		if (storedPlayersString) {
			playerList = <Array<Player>>JSON.parse(storedPlayersString);
		}

		//Get the statuses data from the storage and convert it to the Status object array instance
		const storedStatusesString:
			| string
			| null = this.localStorageService.getData(
			LocalStorageConstants.STATUSES_DATA_KEY
		);
		let statusList: Array<Status> = new Array<Status>();
		if (storedStatusesString) {
			statusList = <Array<Status>>JSON.parse(storedStatusesString);
		}

		const expotableModel: Array<TeamSet> = new Array<TeamSet>();

		//Iterate over the team list to populate the exportable model
		for (const team of teamList) {
			const currentPlayerSets: Array<PlayerSet> = new Array<PlayerSet>();

			//Get the player list associated to the current team
			const currentTeamPlayer: Array<Player> = playerList.filter(
				(player: Player) => {
					return player.playerTeamId === team.teamId;
				}
			);

			//Iterate over the player list to populate the player sets
			for (const player of currentTeamPlayer) {
				//Find the status associated to the current player
				const currentPlayerStatus: Status | undefined = statusList.find(
					(status: Status) => {
						return status.statusId === player.playerStatusId;
					}
				);
				const playerSet: PlayerSet = new PlayerSet(
					player.playerId,
					player.playerTeamId,
					player.playerStatusId,
					<Status>currentPlayerStatus,
					player.playerAbilityId,
					player.playerFirstName,
					player.playerLastName,
					player.playerUniformNumber,
					player.playerFieldPosition,
					player.defaultPlayerFieldPosition
				);

				currentPlayerSets.push(playerSet);
			}

			const currentTeamSet: TeamSet = new TeamSet(
				team.teamId,
				team.teamFullName,
				team.teamShortName,
				currentPlayerSets
			);

			expotableModel.push(currentTeamSet);
		}

		//Convert the model to a json string
		this.exportableJson = JSON.stringify(expotableModel, null, '\t');

		this.generateDownloadFileUri();
	}

	/**
	 * Generates the download json file uri
	 */
	private generateDownloadFileUri(): void {
		const uri: SafeUrl = this.domSanitizer.bypassSecurityTrustUrl(
			'data:text/json;charset=UTF-8,' + encodeURIComponent(this.exportableJson)
		);
		this.jsonUri = uri;
	}
}
