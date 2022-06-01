import { Component, EventEmitter, forwardRef, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent)
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() public value: string | number = null;
  @Input() public label: string = '';
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
