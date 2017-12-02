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
    private authProvider: AuthProvider,
    private miscProvider: MiscProvider
  ) {
    //Form Validations
    this.authForm = formBuilder.group({
      userEmail: ['', Validators.compose([Validators.required, Validators.email])],
      userPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  }
  //Login with email
  emailLogin(user: User){
    let loading = this.miscProvider.createLoading('Entrando...');
    if(this.authForm.valid){
    this.authProvider.emailLogin(user.email, user.password).then(success =>{
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
    let loading = this.miscProvider.createLoading('Entrando...');
    this.authProvider.googleLogin().then(success=>{
        this.navCtrl.setRoot('ContaPage');
        loading.dismiss();
      }).catch(error => loading.dismiss());
  }
  //call facebooklogin from authProvider
  facebookLogin(){
    let loading = this.miscProvider.createLoading('Entrando...');
    this.authProvider.facebookLogin().then(success =>{
        this.navCtrl.setRoot('ContaPage');
        loading.dismiss();
      }).catch(error => loading.dismiss());
  }
  //call twitterlogin from authProvider
  twitterLogin(){
    let loading = this.miscProvider.createLoading('Entrando...');
    this.authProvider.twitterLogin().then(success =>{
        this.navCtrl.setRoot('ContaPage');
        loading.dismiss();
      }).catch(error => loading.dismiss());
  }
}
