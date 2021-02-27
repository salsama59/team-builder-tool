import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StatusComponent } from './status.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('StatusComponent', () => {
  let statusComponent: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

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
                statusId: 0
              }
            },
            params: of({
              statusId: 0
            }),
          }
        }
      ],
      declarations: [StatusComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    statusComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(statusComponent).toBeTruthy();
  });

  it(`should have a current status property populated`, () => {
    expect(statusComponent.currentStatus).toBeDefined();
    expect(statusComponent.currentStatus?.statusId).toBeDefined();
    expect(statusComponent.currentStatus?.playerId).toBeDefined();
    expect(statusComponent.currentStatus?.speed).toBeDefined();
    expect(statusComponent.currentStatus?.stamina).toBeDefined();
    expect(statusComponent.currentStatus?.battingEfficiency).toBeDefined();
    expect(statusComponent.currentStatus?.catchEfficiency).toBeDefined();
    expect(statusComponent.currentStatus?.pitchEfficiency).toBeDefined();
    expect(statusComponent.currentStatus?.passEfficiency).toBeDefined();
    expect(statusComponent.currentStatus?.battingPower).toBeDefined();
    expect(statusComponent.currentStatus?.pitchingPower).toBeDefined();
    expect(statusComponent.currentStatus?.pitchingEffect).toBeDefined();
  });

  it('should render the status form with values from current status', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('#statusIdFormInput')).nativeElement.value).toContain(statusComponent.currentStatus?.statusId);
    expect(compiled.query(By.css('#playerIdFormInput')).nativeElement.value).toContain(statusComponent.currentStatus?.playerId);
    expect(compiled.query(By.css('#speedFormInput')).nativeElement.value).toContain(statusComponent.currentStatus?.speed);
    expect(compiled.query(By.css('#staminaFormInput')).nativeElement.value).toContain(statusComponent.currentStatus?.stamina);
    expect(compiled.query(By.css('#catchEfficiencyFormInput')).nativeElement.value).toContain(statusComponent.currentStatus?.catchEfficiency);
    expect(compiled.query(By.css('#pitchEfficiencyFormInput')).nativeElement.value).toContain(statusComponent.currentStatus?.pitchEfficiency);
    expect(compiled.query(By.css('#passEfficiencyFormInput')).nativeElement.value).toContain(statusComponent.currentStatus?.passEfficiency);
    expect(compiled.query(By.css('#battingEfficiencyFormInput')).nativeElement.value).toContain(statusComponent.currentStatus?.battingEfficiency);
    expect(compiled.query(By.css('#battingPowerFormInput')).nativeElement.value).toContain(statusComponent.currentStatus?.battingPower);
    expect(compiled.query(By.css('#pitchingPowerFormInput')).nativeElement.value).toContain(statusComponent.currentStatus?.pitchingPower);
    expect(compiled.query(By.css('#pitchingEffectFormInput')).nativeElement.value).toContain(statusComponent.currentStatus?.pitchingEffect);
  });

  it('should render the status form in disabled state', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('#statusIdFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#playerIdFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#speedFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#staminaFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#catchEfficiencyFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#pitchEfficiencyFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#passEfficiencyFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#battingEfficiencyFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#battingPowerFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#pitchingPowerFormInput')).nativeElement.disabled).toBeTruthy();
    expect(compiled.query(By.css('#pitchingEffectFormInput')).nativeElement.disabled).toBeTruthy();
  });
});