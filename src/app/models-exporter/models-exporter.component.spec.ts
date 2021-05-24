import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LocalStorageConstants } from '../constants/local-storage-constants';
import { PlayerFieldPositionEnum } from '../enums/player-field-position.enum';
import { Player } from '../models/player.model';
import { Status } from '../models/status.model';
import { Team } from '../models/team.model';
import { LocalStorageService } from '../services/local-storage.service';

import { ModelsExporterComponent } from './models-exporter.component';

describe('ModelsExporterComponent', () => {
	let component: ModelsExporterComponent;
	let fixture: ComponentFixture<ModelsExporterComponent>;
	let localStorageService: LocalStorageService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ModelsExporterComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		localStorageService = TestBed.inject(LocalStorageService);
		localStorageService.setData(
			LocalStorageConstants.TEAMS_DATA_KEY,
			JSON.stringify([
				new Team(0, 'my first team', 'MFT'),
				new Team(1, 'my second team', 'MST'),
				new Team(2, 'my third team', 'MTT'),
				new Team(3, 'my fourth team', 'MFTHT')
			])
		);

		localStorageService.setData(
			LocalStorageConstants.PLAYERS_DATA_KEY,
			JSON.stringify([
				new Player(
					0,
					0,
					0,
					0,
					'Joe',
					'Stanford',
					'00',
					PlayerFieldPositionEnum.CENTER_FIELDER,
					PlayerFieldPositionEnum.CENTER_FIELDER
				),
				new Player(
					1,
					0,
					0,
					0,
					'John',
					'Does',
					'01',
					PlayerFieldPositionEnum.CATCHER,
					PlayerFieldPositionEnum.CATCHER
				),
				new Player(
					2,
					1,
					0,
					0,
					'Felix',
					'Bridge',
					'00',
					PlayerFieldPositionEnum.RIGHT_FIELDER,
					PlayerFieldPositionEnum.RIGHT_FIELDER
				)
			])
		);

		localStorageService.setData(
			LocalStorageConstants.STATUSES_DATA_KEY,
			JSON.stringify([
				new Status(0, 0, 'test', 10, 27, 60.5, 70.5, 45, 5, 50, 78, 15)
			])
		);
		fixture = TestBed.createComponent(ModelsExporterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create witout datas in local storage', () => {
		localStorageService.clearAllDatas();
		component.ngOnInit();
		expect(component).toBeTruthy();
	});

	it('should render the model exporter', () => {
		const compiled = fixture.debugElement;
		expect(compiled.query(By.css('#modelExporter')).nativeElement).toBeTruthy();
	});

	it('should render the export button', () => {
		const compiled = fixture.debugElement;
		expect(compiled.query(By.css('#ExportButton')).nativeElement).toBeTruthy();
	});

	it('should render the exportable data', () => {
		const compiled = fixture.debugElement;
		expect(
			compiled.query(By.css('#exportableData')).nativeElement
		).toBeTruthy();
	});

	afterEach(() => {
		localStorageService.clearAllDatas();
	});
});
