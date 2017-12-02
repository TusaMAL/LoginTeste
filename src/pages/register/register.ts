import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';
import { MiscProvider } from '../../providers/misc/misc';

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
    public miscProvider: MiscProvider,
    private authProvider: AuthProvider,
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
      this.authProvider.emailSignUp(user).then(success =>{
        this.navCtrl.setRoot(LoginPage);
      });
    }
  }
}
