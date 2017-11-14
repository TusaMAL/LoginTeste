import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Paginas
import { LoginPage } from '../pages/login/login';

//Native
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Facebook } from '@ionic-native/facebook';

//Provider
import { AuthProvider } from '../providers/auth/auth';
import { FacebookProvider } from '../providers/facebook/facebook';
import { MiscProvider } from '../providers/misc/misc';

//FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyC92arwDt9Tfdm5hDY1OiPRXnMOPi9lue4",
  authDomain: "unimed-experienc-1507038363160.firebaseapp.com",
  databaseURL: "https://unimed-experienc-1507038363160.firebaseio.com",
  projectId: "unimed-experienc-1507038363160",
  storageBucket: "unimed-experienc-1507038363160.appspot.com",
  messagingSenderId: "398287542219"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FacebookProvider,
    MiscProvider,
    ScreenOrientation,
    Facebook,
    
  ]
})
export class AppModule {}
