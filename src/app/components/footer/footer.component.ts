import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() eventFooter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleMenu(typeMenu: string) {
    this.eventFooter.emit(typeMenu);
  }

}
