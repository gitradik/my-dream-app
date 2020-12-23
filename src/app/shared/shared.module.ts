import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldModule } from './form-field/form-field.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [],
  exports: [
    CommonModule,
    FormFieldModule,
    ButtonComponent
  ]
})
export class SharedModule { }
