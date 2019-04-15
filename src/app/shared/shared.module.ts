import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FilterPipe } from "../filter.pipe";

// Modules
const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    FilterPipe
  ],
  declarations: [FilterPipe],

})
export class SharedModule { }
