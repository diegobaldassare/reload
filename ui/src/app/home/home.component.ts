import { Component, OnInit } from '@angular/core';
import {PhotoUploaderModalComponent} from "../photo-uploader-modal/photo-uploader-modal.component";
import {MatDialog} from '@angular/material';
import {ImageService} from "../../services/image.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // animal: string;
  // name: string;
  //
  // constructor(public dialog: MatDialog,
  //             private imgserver: ImageService) { }
  //
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(PhotoUploaderModalComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

  ngOnInit(): void {

  }


  // selectedFile: File;
  //
  // onFileChanged(event) {
  //   this.selectedFile = event.target.files[0]
  // }
  //
  // onUpload() {
  //   this.imgserver.postImage(this.selectedFile);
  //
  //
  // }




}
