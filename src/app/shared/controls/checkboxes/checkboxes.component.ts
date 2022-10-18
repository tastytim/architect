import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlItem, Value } from '../select/select.component';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true,
    },
  ],
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {
  @Input() items!: ControlItem[];
  @Output() changed = new EventEmitter<Value[]>();
  value!: Value[];
  isDisabled!: boolean;

  private propagateChanged: any = () => {};
  private propagateTouched: any = () => {};

  constructor() {}
  writeValue(value: Value[]): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.propagateChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChanged(value: Value, checked: Event): void {
    const isChecked = (checked.target as HTMLInputElement).checked;
    const selected = this.getSelected(value, isChecked);
    this.value = selected;
    this.propagateChanged(selected);
    this.changed.emit(selected);
  }

  isChecked(value: Value): boolean {
    return this.value && this.value.includes(value);
  }

  private getSelected(value: Value, checked: boolean) {
    const selected: Value[] = this.value ? [...this.value] : [];

    if (checked) {
      if (!selected.includes(value)) {
        selected.push(value);
      }
    } else {
      const index = selected.indexOf(value);
      selected.splice(index, 1);
    }
    console.log(selected)
    return selected.length > 0 ? selected : [];
  }

  ngOnInit(): void {}
}
