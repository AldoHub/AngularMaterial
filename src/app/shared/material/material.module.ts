import { NgModule } from '@angular/core';
import {
 MatCardModule,
 MatButtonModule,
 MatFormFieldModule,
 MatInputModule,
 MatStepperModule,
 MatProgressSpinnerModule,
 MatDialogModule
  } from '@angular/material';

// Modules
const modules = [
 MatCardModule,
 MatButtonModule,
 MatFormFieldModule,
 MatInputModule,
 MatStepperModule,
 MatProgressSpinnerModule,
 MatDialogModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: []
})
export class MaterialModule { }
