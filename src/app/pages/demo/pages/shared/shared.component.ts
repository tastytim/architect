import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors , markFormGroupTouched} from '@app/shared/utils';
import { ControlItem } from '@app/models/frontend';
import { NotificationService } from '@app/services';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline!: boolean;
  regexErrors = regexErrors;
  items!: ControlItem[];
  itemss!: ControlItem[];
  itemsss!: ControlItem[];
  showSpinner = false;

  constructor(private fb: FormBuilder,
    private notification:NotificationService) {
    this.isInline = true;
    this.items = [
      { label: 'Italy', value: 1 },
      { label: 'France', value: 1 },
      { label: 'Russia', value: 2 },
      { label: 'USA', value: 3 },
      { label: 'Cina', value: 4 },
    ];
    this.itemss = [
      { label: 'First', value: 1 },
      { label: 'Second', value: 2 },
      { label: 'Third', value: 3 },
      { label: 'Fourth', value: 4 },
      { label: 'Fifth', value: 5 },
    ];
    this.itemsss = [
      { label: 'First', value: 1 },
      { label: 'Second', value: 2 },
      { label: 'Third', value: 3 },
      { label: 'Fourth', value: 4 },
      { label: 'Fifth', value: 5 },
    ];
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            //Validators.email,
            Validators.pattern(regex.email),
          ],
        },
      ],
      password: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.pattern(regex.password),
            Validators.minLength(8),
          ],
        },
      ],

      autocomplete: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      select: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      checkboxes: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      radio: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      date: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      dateRange: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
    });
  }

  onPatchValue() {
    this.form.patchValue({
      input: 'text',
      password: 'qwerty',
      autocomplete:1,
      select:2,
      checkboxes:[3],
      radios:4,
      date:new Date().getTime()
    });
  }

  onToggleInline() :void{
    this.isInline = !this.isInline;
  }
  onToggleDisable() :void{
    if(this.form.enabled){
      this.form.disable()
    }else{
      this.form.enable()
    }
  }

  onResetValues():void{
    this.form.reset()
  }

  onSubmit():void {
   if(!this.form.valid){
    markFormGroupTouched(this.form)
   }
  }

  onSuccess():void{

    this.notification.success('Ok')
  }

  onError():void{
this.notification.error('Some error')
  }

  onToggleSpinner():void{
    this.showSpinner = !this.showSpinner
  }
}
