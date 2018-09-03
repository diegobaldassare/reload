import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { PhotoUploaderModalComponent } from './photo-uploader-modal/photo-uploader-modal.component';
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ImageService } from "../services/image.service";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    PhotoUploaderModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [PhotoUploaderModalComponent],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
