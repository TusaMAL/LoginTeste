import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { MiscProvider } from '../../providers/misc/misc';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;
  authForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private _authProvider: AuthProvider,
    private _miscProvider: MiscProvider
  ) {
    //Form Validations
    this.authForm = formBuilder.group({
      userEmail: ['', Validators.compose([Validators.required, Validators.email])],
      userPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  }
  //Login with email
  emailLogin(user: User){
    let loading = this._miscProvider.createLoading('Entrando...');
    if(this.authForm.valid){
    this._authProvider.emailLogin(user.email, user.password).then(success =>{
      this.navCtrl.setRoot('ContaPage');
      loading.dismiss();
    }).catch(error => loading.dismiss());
    }
  }
  //push to page Register
  emailSignUp(){
    this.navCtrl.push("RegisterPage");
  }
  //call googlelogin from authProvider
  googleLogin(){
    let loading = this._miscProvider.createLoading('Entrando...');
    this._authProvider.googleLogin().then(success=>{
        this.navCtrl.setRoot('ContaPage');
        loading.dismiss();
      }).catch(error => loading.dismiss());
  }
  //call facebooklogin from _authProvider
  facebookLogin(){
    let loading = this._miscProvider.createLoading('Entrando...');
    this._authProvider.facebookLogin().then(success =>{
        this.navCtrl.setRoot('ContaPage');
        loading.dismiss();
      }).catch(error => loading.dismiss());
  }
  //call twitterlogin from _authProvider
  twitterLogin(){
    let loading = this._miscProvider.createLoading('Entrando...');
    this._authProvider.twitterLogin().then(success =>{
        this.navCtrl.setRoot('ContaPage');
        loading.dismiss();
      }).catch(error => loading.dismiss());
  }
}
