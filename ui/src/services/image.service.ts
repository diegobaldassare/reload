import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ImageService {

  private name: string = 'http://localhost:9000/';

  constructor(private http: HttpClient) { }

  postImage(img) {
    this.http.post(this.name + 'image', img).toPromise();
  }
}
