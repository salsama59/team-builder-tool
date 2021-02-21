import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PlayerComponent } from './player.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('PlayerComponent', () => {
  let playerComponent: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                playerId: 0
              }
            },
            params: of({
              playerId: 0
            }),
          }
        }
      ],
      declarations: [PlayerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    playerComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(playerComponent).toBeTruthy();
  });

  it(`should have a current player property populated`, () => {
    expect(playerComponent.currentPlayer).toBeDefined();
    expect(playerComponent.currentPlayer?.playerId).toBeDefined();
    expect(playerComponent.currentPlayer?.playerTeamId).toBeDefined();
    expect(playerComponent.currentPlayer?.playerStatusId).toBeDefined();
    expect(playerComponent.currentPlayer?.playerAbilityId).toBeDefined();
    expect(playerComponent.currentPlayer?.playerName).toBeDefined();
    expect(playerComponent.currentPlayer?.playerFieldPosition).toBeDefined();
    expect(playerComponent.currentPlayer?.defaultPlayerFieldPosition).toBeDefined();
  });

  it('should render the player form with values from current player', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('#playerIdFormInput')).nativeElement.value).toContain(playerComponent.currentPlayer?.playerId);
    expect(compiled.query(By.css('#playerTeamIdFormInput')).nativeElement.value).toContain(playerComponent.currentPlayer?.playerTeamId);
    expect(compiled.query(By.css('#playerStatusIdFormInput')).nativeElement.value).toContain(playerComponent.currentPlayer?.playerStatusId);
    expect(compiled.query(By.css('#playerAbilityIdFormInput')).nativeElement.value).toContain(playerComponent.currentPlayer?.playerAbilityId);
    expect(compiled.query(By.css('#playerNameFormInput')).nativeElement.value).toContain(playerComponent.currentPlayer?.playerName);
    expect(compiled.query(By.css('#playerFieldPositionFormInput')).nativeElement.value).toContain(playerComponent.currentPlayer?.playerFieldPosition);
    expect(compiled.query(By.css('#defaultPlayerFieldPositionFormInput')).nativeElement.value).toContain(playerComponent.currentPlayer?.defaultPlayerFieldPosition);
  });

  it('should render the player form in disabled state', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('#playerIdFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#playerTeamIdFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#playerStatusIdFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#playerAbilityIdFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#playerNameFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#playerFieldPositionFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#defaultPlayerFieldPositionFormInput')).nativeElement.disabled).toBeTruthy();
  });
});
