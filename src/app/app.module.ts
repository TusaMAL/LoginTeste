import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Native
import { Facebook } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { GooglePlus } from '@ionic-native/google-plus';

//Provider
import { AuthProvider } from '../providers/auth/auth';
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
    MyApp
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
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    MiscProvider,
    Facebook,
    TwitterConnect,
    GooglePlus
  ]
})
export class AppModule {}
