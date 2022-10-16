import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline!:boolean;

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn:'blur',
        validators:[
          Validators.required,
          Validators.minLength(3),
       //   Validators.pattern('')
        ]
      }],
    });
  }

  onPatchValue() {
    this.form.patchValue({ input: 'text' });
  }

  onToggleInline(){
    this.isInline = !this.isInline
  }

  onSubmit(){
    console.log('Submit')
  }
}
