import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Paginas
import { LoginPage } from '../pages/login/login';

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
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyAe1N5qyxrxC9mLxS7v0lFJaoSYphzgXVc",
  authDomain: "unimed-firestore.firebaseapp.com",
  databaseURL: "https://unimed-firestore.firebaseio.com",
  projectId: "unimed-firestore",
  storageBucket: "unimed-firestore.appspot.com",
  messagingSenderId: "166242473013"
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
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
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
