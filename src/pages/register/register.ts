import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private _authProvider: AuthProvider,
  ) {
    //Form Validations
    this.registerForm = formBuilder.group({
      userEmail: ['', Validators.compose([Validators.required, Validators.email])],
      userPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(32)])]
  });
  }
  emailSignUp(user: User){
    if(this.registerForm.valid)
    {
      this._authProvider.emailSignUp(user).then(success =>{
        this.navCtrl.setRoot(LoginPage);
      });
    }
  }
}
