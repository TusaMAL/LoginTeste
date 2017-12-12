import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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
    private http: Http
  ) {
    
    //Form Validations
    this.registerForm = this.formBuilder.group({
      userEmail: [null, Validators.compose([Validators.required, Validators.email])],
      userPassword: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(32)])]
  });
  }
  onSubmit(){
    if(this.registerForm.valid)
    {
      this._authProvider.emailSignUp(this.registerForm.value).then(success =>{
        this.navCtrl.setRoot(LoginPage);
      });
    }
  }

  onSubmit2(){
    console.log(this.registerForm.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.registerForm.value))
    .map( success => success)
    .subscribe( success => {
      console.log(success);
      //Reset o form
      this.registerForm.reset();
    }),((error: any) => console.log(error));
  }
}
