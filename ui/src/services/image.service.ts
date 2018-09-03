import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ImageService {

  private name: string = 'http://localhost:9000/';

  constructor(private http: HttpClient) { }

  postImage(selectedFile) {
  //   // this.http.post(this.name + 'image', img).toPromise();
  //
  //
  //   const uploadData = new FormData();
  //
  //   uploadData.append('myFile', selectedFile, selectedFile.name);
  //   this.http.post('http://localhost:9000/image', uploadData, {
  //     reportProgress: true,
  //     observe: 'events'
  //   })
  //     .subscribe(event => {
  //       console.log(event); // handle event here
  //     });
  }
}
