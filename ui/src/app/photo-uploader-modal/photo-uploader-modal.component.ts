import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ImageService} from "../../services/image.service";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-photo-uploader-modal',
  templateUrl: './photo-uploader-modal.component.html',
  styleUrls: ['./photo-uploader-modal.component.css']
})
export class PhotoUploaderModalComponent {

  constructor(
    public dialogRef: MatDialogRef<PhotoUploaderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private imageService: ImageService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  postImage(img) {
    this.imageService.postImage(img);
  }
}
