import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/*
  Generated class for the FacebookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FacebookProvider {

  constructor(private fb: Facebook) {
    console.log('Hello FacebookProvider Provider');
  }

  login(permissions: string[]): Promise<FacebookLoginResponse>{
    return this.fb.login(permissions);
  }
}
