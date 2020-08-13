import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testArray:Array<any> = [
    "1. Cras justo odio",
    "2. Dapibus ac facilisis in",
    "3. Morbi leo risus",
    "4. Porta ac consectetur ac",
    "5. Vestibulum at eros"
  ];

  

}
