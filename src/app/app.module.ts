import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//shared module
import { SharedModule } from './shared/shared.module';

//environment
import { environment } from '../environments/environment';

//angularfire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { DialogComponent } from './main/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
 
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
  ],
  providers: [AngularFirestore, {provide: StorageBucket, useValue: "gs://fir-material-1e4a8.appspot.com"}],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
