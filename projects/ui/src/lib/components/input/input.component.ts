import { Component, EventEmitter, forwardRef, Input, OnInit, Optional, Output, Self, ElementRef, ViewChild } from '@angular/core';
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
  @Input() public maskConfig: string = '';
  @Input() public isCurrency: boolean = false;
  @Output() public valueChange = new EventEmitter<string | number>();
  public onChange = (value: string | number) => {};
  public onTouched = () => {};

  inputValue = new FormControl();
  @ViewChild('customInput', {static: false}) inputEl: ElementRef;

  constructor(private elementRef: ElementRef) {}

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
    this.writeValue(this.inputEl.nativeElement.value);
  }

  eventBlur(value: string) {
    this.writeValue(value)
  }

}
