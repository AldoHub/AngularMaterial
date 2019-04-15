import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { AddPostRoutingModule } from './add-post-routing.module';
import { AddPostComponent } from './add-post.component';

//need to import ReactiveForms module here too
//import { ReactiveFormsModule } from '@angular/forms';

//import shared Module
import { SharedModule } from "../shared";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    AddPostRoutingModule,
    //ReactiveFormsModule
  ],
  declarations: [AddPostComponent]
})
export class AddPostModule { }