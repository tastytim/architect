import {
  Component,
  forwardRef,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

type PasswordType = 'password' | 'text';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
    },
  ],
})
export class PasswordComponent implements OnInit, ControlValueAccessor {
  value!: string;
  isDisabled!: boolean;
  passwordType!: PasswordType;
  @Input() placeholder!: string;
  @Output() changed = new EventEmitter<string>();
  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};
  constructor() {
    this.passwordType = 'password';
  }
  writeValue(value: string): void {
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

  onKeyUp(event: Event) :void{
    let val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.propagateChange(val);
    this.changed.emit(val);
  }

  onBlur():void {
    this.propagateTouched();
  }

  togglePassword():void{
     this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
  }

  ngOnInit(): void {}
}
