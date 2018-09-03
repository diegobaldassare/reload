// import { Injectable } from '@angular/core';
// import {HttpClient} from "@angular/common/http";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ConfigService {
//
//   constructor(private http: HttpClient) { }
//
//   // configUrl = 'assets/config.json';
//
//   getConfig() {
//     // now returns an Observable of Config
//     return this.http.get<Config>(this.configUrl);
//   }
//
//   config: Config;
//
//   showConfig() {
//     this.configService.getConfig()
//     // clone the data object, using its known Config shape
//       .subscribe((data: Config) => this.config = { ...data });
//   }
//
// }
