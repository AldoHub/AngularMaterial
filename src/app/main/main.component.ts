import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "../firestore.service";
import { BehaviorSubject } from 'rxjs';

import {MatDialog} from '@angular/material';
import { DialogComponent } from "./dialog/dialog.component";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private firestoreService: FirestoreService,  public dialog: MatDialog,) { }

  deletePost(id:string, image: string){
    console.log(image)
    console.log(id)
    this.firestoreService.deletePost(id, image);
  }

  size$: BehaviorSubject<string|null>;
  items$: any;
  posts: any;

  filterBy(size: string|null) {
    this.size$.next(size);
  }

  openDialog(postObj: Object): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '80%',
      data: { post: postObj }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      console.log(result);
    });
  }

  data: any  = this.firestoreService.getPosts().subscribe(posts => {
    this.size$ = new BehaviorSubject(null); 
    this.items$ = posts;
    this.posts = [];

    posts.map( post => {
      this.posts.push({
        id: post.payload.doc.id,
        title: post.payload.doc.data()["title"],
        content: post.payload.doc.data()["content"],
        image: post.payload.doc.data()["cover"],
        fileref: post.payload.doc.data()["fileref"]
      })
    })
  
  })

  ngOnInit() {

  }

}
