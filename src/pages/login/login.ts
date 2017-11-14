import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { MiscProvider } from '../../providers/misc/misc';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    private authProvider: AuthProvider,
    private miscProvider: MiscProvider
  ) {

  }
  tabsPage(){
    this.navCtrl.setRoot('TabsPage');
  }
  loginFacebook(){
    let loading = this.miscProvider.createLoading('Entrando...');
    let permissions = ['email', 'public_profile', 'user_posts'];
    this.authProvider.facebookLogin(permissions).then(()=>{
      if(this.authProvider.authenticated)
      {
        this.navCtrl.setRoot('TabsPage');
        loading.dismiss();
      }
      else{
        this.miscProvider.createAlert("Erro!", null, "Erro ao fazer login com o facebook");
        loading.dismiss();
      }
    });
  }
}
