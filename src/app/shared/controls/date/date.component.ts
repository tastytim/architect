import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
type Value = number;

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true,
    },
  ],
})
export class DateComponent implements OnInit, ControlValueAccessor {
  @Output() changed = new EventEmitter<Value>()
  @Input() min : Date;
  @Input() max : Date;
  @Input() placeholder! : string;

  value!: Value;
  isDisabled!: boolean;

  private pChange: any = () => {};
  private pTouch: any = () => {};

  constructor() {}
  writeValue(value: Value): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.pChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.pTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChanged(event:MatDatepickerInputEvent<Date>):void{
   const val = event.value  ? event.value.getTime() : null
   this.value = val;
   this.pChange(val);
   this.changed.emit(val)
  }

  onClosed():void{
    this.pTouch()
  }

  get inputValue():Date{
    return this.value ? new Date(this.value) : null
  }
  ngOnInit(): void {}
}
