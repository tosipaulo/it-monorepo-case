import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-title',
  styleUrls: ['./title.component.scss'],
  template: `
    <h2 class="title" [class.title__dark]="theme === 'dark' ? 'dark' : ''">{{ title }}</h2>
  `
})
export class TitleComponent {
  @Input() title = '';
  @Input() theme = '';
}
