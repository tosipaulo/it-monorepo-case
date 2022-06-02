import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { CurrencyMaskModule } from "ng2-currency-mask";
@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule
  ],
  exports: [InputComponent]
})
export class InputModule { }
