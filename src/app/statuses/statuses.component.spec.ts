import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Status } from '../models/status.model';

import { StatusesComponent } from './statuses.component';

describe('StatusesComponent', () => {
  let statusesComponent: StatusesComponent;
  let fixture: ComponentFixture<StatusesComponent>;
  let activatedRoute: ActivatedRoute;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
          {
            path: 'statuses'
            , component: StatusesComponent
          }
        ])
      ],
      declarations: [StatusesComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            params: of({}),
            queryParams: of({}),
            snapshot: { params: { statusId: '0' } },
            url: of([new UrlSegment('/', {}), new UrlSegment('statuses', { statusId: '0' })]),
            fragment: of('/statuses')
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusesComponent);
    statusesComponent = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    statusesComponent.statuses = [
      new Status(0, 0, 10, 27, 60.5, 70.5, 45, 5, 50, 78, 15)
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(statusesComponent).toBeTruthy();
  });

  it('should posses a status in it list', () => {
    expect(statusesComponent.statuses).toBeDefined();
    expect(statusesComponent.statuses).toHaveSize(1);
  });

  it('should render the status list header', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h5#statuses-list-header').textContent).toContain('Statuses');
  });

  it('should render a status id in the list', () => {
    const compiled = fixture.nativeElement;
    const index: number = 0;
    if (statusesComponent.statuses) {
      expect(compiled.querySelector('div#status-id-element-' + index).textContent).toContain(statusesComponent.statuses[index].statusId);
    }
  });

  it('should render a player id in the list', () => {
    const compiled = fixture.nativeElement;
    const index: number = 0;
    if (statusesComponent.statuses) {
      expect(compiled.querySelector('div#status-player-id-element-' + index).textContent).toContain(statusesComponent.statuses[index].playerId);
    }
  });

  it('should render a new status button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a#new-status-button-id').textContent).toContain("Add a new status");
  });

  it('should navigate to view status section', () => {
    const spy = spyOn(router, 'navigate');
    statusesComponent.onViewStatusElement(0);
    expect(spy).toHaveBeenCalledWith([0], { relativeTo: activatedRoute });
  });
});