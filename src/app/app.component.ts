import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemMenuFooter: string;

  handleFooter(itemMenu) {
    this.itemMenuFooter = itemMenu;
  }
}
