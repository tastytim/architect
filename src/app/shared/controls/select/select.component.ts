import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlItem, Value } from '@app/models/frontend';
export { ControlItem, Value } from '@app/models/frontend';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() items!: ControlItem[];
  @Input() placeholder!: string;
  @Output() changed = new EventEmitter<Value>();
  value!: Value;
  isDisabled!: boolean;

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};
  constructor() {}
  writeValue(value: Value): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChanged(event : MatSelectChange):void{
    const val = event.value ? event.value  : null;
    this.value = val;
    this.propagateChange(val);
    this.changed.emit(val);

  }

  onBlur():void{
    this.propagateTouched()
  }

  ngOnInit(): void {}
}
