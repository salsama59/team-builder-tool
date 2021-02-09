import { Component } from '@angular/core';

/**
 * Class representing the main application component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * The application title.
   * @type {string}
   * @public
   */
  public title: string = 'Teams builder tool';
}
