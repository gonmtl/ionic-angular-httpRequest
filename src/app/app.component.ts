import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'results';
  users: any[] = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    protected userService: UserService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data) => {
        // tslint:disable-next-line: no-string-literal
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
