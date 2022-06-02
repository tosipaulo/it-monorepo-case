import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() hasMenuToBack: boolean = true;
  @Input() actions: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
