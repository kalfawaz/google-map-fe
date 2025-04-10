import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputType } from '../../enums/inputType';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { InputError } from '../../models/input-error';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() label: string = '';
  @Input() isRequired: boolean = false;
  @Input() placeholder: string = '';
  @Input() type: InputType = InputType.TEXT
  @Input() isDisabled: boolean = false;
  @Input() controlName!: string;
  @Input() formGroupDirective!: FormGroupDirective;
  @Input() allowedRegex!: string;
  @Input() errors!: InputError[];


  fieldError(errorType: string) {
    return this.formGroupDirective.form.get(this.controlName)?.errors?.[errorType]
      && (this.formGroupDirective.form.get(this.controlName)?.touched || this.formGroupDirective.submitted);
  }

  onInputChange(value: string | undefined) {
    return !this.allowedRegex || (value && new RegExp(this.allowedRegex).test(value));
  }
}
