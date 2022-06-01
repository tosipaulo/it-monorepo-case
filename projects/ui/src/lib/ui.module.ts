import { NgModule } from '@angular/core';

import { ListCategoryModule } from './components/list-category/list-category.module';
import { TitleModule } from './components/title/title.module';
import { ContainerModule } from './components/container/container.module';
import { InputModule } from './components/input/input.module';
import { ButtonModule } from './components/button/button.module';
import { SelectModule } from './components/select/select.module';

@NgModule({
  imports: [
    TitleModule,
    ListCategoryModule,
    ContainerModule,
    InputModule,
    ButtonModule,
    SelectModule
  ]
})
export class UiModule { }
