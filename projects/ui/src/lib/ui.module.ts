import { NgModule } from '@angular/core';

import { ListCategoryModule } from './components/list-category/list-category.module';
import { TitleModule } from './components/title/title.module';
import { ContainerModule } from './components/container/container.module';
import { InputComponent } from './components/input/input.component';
import { InputModule } from './components/input/input.module';

@NgModule({
  imports: [
    TitleModule,
    ListCategoryModule,
    ContainerModule,
    InputModule
  ],
  declarations: [
    InputComponent
  ]
})
export class UiModule { }
