import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


//import shared Module
import { SharedModule } from "../shared";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MainRoutingModule,
  ],
  declarations: [MainComponent]
})
export class MainModule { }