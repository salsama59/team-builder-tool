import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the teams feature', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('#team-feature-element')).nativeElement).toBeTruthy();
  });

  it('should render the players feature', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('#player-feature-element')).nativeElement).toBeTruthy();
  });

  it('should render the statuses feature', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('#status-feature-element')).nativeElement).toBeTruthy();
  });
});
