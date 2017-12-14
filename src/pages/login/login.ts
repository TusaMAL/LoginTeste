import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { MiscProvider } from '../../providers/misc/misc';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  authForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private authProvider: AuthProvider,
    private miscProvider: MiscProvider
  ) {
    //Form Validations
    this.authForm = formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(32)])]
    });
  }

  //Login with email
  emailLogin() {
    if (this.authForm.valid) {
      let loading = this.miscProvider.createLoading('Entrando...');
      this.authProvider.emailLogin(this.authForm.value).then(success => {
        this.navCtrl.setRoot('ContaPage');
        loading.dismiss();
      }).catch(error => loading.dismiss());
    } else {
      this.formFieldValidation(this.authForm);
    }
  }

  //To focus the required fields when form isn't valid
  formFieldValidation(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsDirty();
      //If the form has other objects inside it will validate the object fields too
      if (control instanceof FormGroup) {
        this.formFieldValidation(control);
      }
    })
  }
  //push to page Register
  emailSignUp() {
    this.navCtrl.push('RegisterPage');
  }
  //call googlelogin from authProvider
  googleLogin() {
    let loading = this.miscProvider.createLoading('Entrando...');
    this.authProvider.googleLogin().then(success => {
      this.navCtrl.setRoot('ContaPage');
      loading.dismiss();
    }).catch(error => loading.dismiss());
  }
  //call facebooklogin from authProvider
  facebookLogin() {
    let loading = this.miscProvider.createLoading('Entrando...');
    this.authProvider.facebookLogin().then(success => {
      this.navCtrl.setRoot('ContaPage');
      loading.dismiss();
    }).catch(error => loading.dismiss());
  }
  //call twitterlogin from authProvider
  twitterLogin() {
    let loading = this.miscProvider.createLoading('Entrando...');
    this.authProvider.twitterLogin().then(success => {
      this.navCtrl.setRoot('ContaPage');
      loading.dismiss();
    }).catch(error => loading.dismiss());
  }

  //Validations

  //Return if the field is required, not valid and if is touched
  requiredField(property: string) {
    let form = this.authForm.get(property);

    return form.hasError('required') && (form.touched || form.dirty);
  }

  //To check the email format with angular Validator Regex
  badlyFormated(property: string) {
    let form = this.authForm.get(property);

    return form.hasError('email') && (form.touched || form.dirty);
  }
}

