import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from '../../models/auth/components/sign-up/sign-up.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SignUpComponent],
})
export class FormModule {}
