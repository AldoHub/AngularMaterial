import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from 'rxjs';
import { FirestoreService } from "../firestore.service";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor( private firestoreService: FirestoreService) { }

  public details = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('',  Validators.required),
  });

  public cover = new FormGroup({
    cover: new FormControl('',  Validators.required),
  });

  title;
  content;
  image;  
  imageURL;
  percentage;
  formSubscription: Subscription;
  percentSubscription: Subscription;

  public handleInput($event: Event){
    //getting the image or files
    this.image = $event.target["files"];
    console.log(this.image);
  
    let reader = new FileReader();
    reader.readAsDataURL(this.image[0])
    reader.onload = (e) => {
      this.imageURL = reader.result;
    }
  
  }

  //checks form changes
  onFormChanges(data) {
    this.title = data.title;
    this.content = data.content;

  }


  public sendData(){
   
    console.log(this.image, this.title, this.content);

    let data = {
      title: this.title,
      content: this.content
    }

   this.firestoreService.createPost(data, this.image);
  }


  ngOnInit() {
    this.formSubscription = this.details.valueChanges.subscribe(values => {
      console.log(values);
      this.onFormChanges(values);

    })
  
    this.percentSubscription = this.firestoreService.percentageChanges.subscribe( x => this.percentage = x);
  
  }

}
