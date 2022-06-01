import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent)
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  @Input() public value: string | number = null;
  @Input() public label: string = '';
  @Input() public options: {name: string; id: string}[];
  @Output() public valueChange = new EventEmitter<string | number>();
  public onChange = (value: string | number) => {};
  public onTouched = () => {};

  inputValue = new FormControl();

  constructor() {}

  ngOnInit(): void {
  }

  writeValue(value: string | number): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.inputValue.setValue(this.value);
  }

  registerOnChange(fn: (value: string | number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  handleInput(value) {
    this.writeValue(value)
  }

}
