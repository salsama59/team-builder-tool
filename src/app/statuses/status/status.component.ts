import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Status } from 'src/app/models/status.model';
import { StatusService } from 'src/app/services/status.service';

/**
 * This class represent the status component.
 * @implements OnInit
 */
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  /**
    * The current status to be displayed
    */
  public currentStatus: Status | null = null;

  /**
   * Creates an instance of status component.
   * @constructor
   * @param statusService  the status service injected
   * @param activatedRoute the activated route
   */
  constructor(private statusService: StatusService, private activatedRoute: ActivatedRoute) { }

  /**
   * Initialize the current displayed status by getting the url parameter.
   * Also a subscribtion to the parameter change is done in order to update the current displayed status whe needed.
   */
  ngOnInit(): void {
    //Get the status id value as soon as possible using the snapshot property, and convert the string value to number with the '+' operator
    const statusId: number = + this.activatedRoute.snapshot.params['statusId'];
    this.currentStatus = this.statusService.getStatusById(statusId);

    //Subscripbe the params property change in case the routing is done in the same page.
    this.activatedRoute.params.subscribe((params: Params) => {
      const statusId: number = + params['statusId'];
      this.currentStatus = this.statusService.getStatusById(statusId);
    });
  }

}
