import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { PhotoUploaderModalComponent } from './photo-uploader-modal/photo-uploader-modal.component';
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ImageService } from "../services/image.service";
import {UploaderComponent} from "./uploader/uploader.component";
import {MessageService} from "./message.service";
import {UploaderService} from "./uploader/uploader.service";
import {ConfigComponent} from "./config/config.component";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'image', component: PhotoUploaderModalComponent },
  { path: 'map', component: MapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    PhotoUploaderModalComponent,
    UploaderComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  entryComponents: [PhotoUploaderModalComponent],
  providers: [
    ImageService,
    MessageService,
    UploaderService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
