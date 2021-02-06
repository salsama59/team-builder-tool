import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'team-builder-tool';


  myfunc(): void {
    const essai: number = 10;
    console.log(essai);
  }
}
