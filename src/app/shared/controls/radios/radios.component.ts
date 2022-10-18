import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlItem, Value } from '@app/models/frontend';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiosComponent),
      multi: true,
    },
  ],
})
export class RadiosComponent implements OnInit, ControlValueAccessor {
  @Output() changed = new EventEmitter<Value>();
  @Input() items! :ControlItem[];
  value!: Value;
  isDisabled!: boolean;
  private pChange:any = () => {};
  private pTouche = () => {};

  constructor() {}
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.pChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.pTouche = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  isChecked(value: Value): boolean {
    return this.value == value;
  }

  onChanged(event: Event): void {
    let val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.pChange(val);
    this.changed.emit(val);
  }

  ngOnInit(): void {}
}
