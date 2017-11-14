import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AuthProvider } from '../providers/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    screenOrientation: ScreenOrientation,
    authProvider: AuthProvider
  ) {
    platform.ready().then(() => {
      if(platform.is('windows'))
      {
        //Trava a tela do dispositivo em modo retrato
        screenOrientation.lock("portrait-primary");
      }
      authProvider.currentUserObservable.subscribe(user => {
        if(user !== null){
        this.rootPage = 'TabsPage';
        splashScreen.hide();
        }
        else{
          this.rootPage = LoginPage;
          splashScreen.hide();
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

