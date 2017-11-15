import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Paginas
import { LoginPage } from '../pages/login/login';

//Native
import { Facebook } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';

//Provider
import { AuthProvider } from '../providers/auth/auth';
import { FacebookProvider } from '../providers/facebook/facebook';
import { MiscProvider } from '../providers/misc/misc';

//FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyDhlsHLhn7P-MDpqru1nSVXirKSSq4GgWc",
  authDomain: "teste-login-379e6.firebaseapp.com",
  databaseURL: "https://teste-login-379e6.firebaseio.com",
  projectId: "teste-login-379e6",
  storageBucket: "teste-login-379e6.appspot.com",
  messagingSenderId: "661419602371"
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
    Facebook,
    TwitterConnect
  ]
})
export class AppModule {}
