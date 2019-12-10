import {HttpClient} from "@angular/common/http";
import {IdleMonitorService, ScullyRoutesService} from '@scullyio/ng-lib';
 import { Component } from '@angular/core';
import {take} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (
      private idle: IdleMonitorService,
      public scully: ScullyRoutesService,
      public http: HttpClient,
  ) {
    this.scully.available$.pipe(take(1)).subscribe(console.log);
    this.http
        .get('https://www.ng-conf.org/wp-json/wp/v2/posts')
        .subscribe(value => console.log(value))
  }

  title = 'ngconfdata1234';

}
