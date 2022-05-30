import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-title',
  styleUrls: ['./title.component.scss'],
  template: `
    <h2>{{ title }}</h2>
  `
})
export class TitleComponent {
  @Input() title = ''

}
