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
  facebookLogin(){
    let loading = this.miscProvider.createLoading('Entrando...');
    this.authProvider.facebookLogin().then(()=>{
      if(this.authProvider.authenticated)
      {
        this.navCtrl.setRoot('ContaPage');
        loading.dismiss();
      }
      else{
        this.miscProvider.createAlert("Erro!", null, "Erro ao fazer login com o facebook");
        loading.dismiss();
      }
    });
  }
  twitterLogin(){
    let loading = this.miscProvider.createLoading('Entrando...');
    this.authProvider.twitterLogin().then(() =>{
      if(this.authProvider.authenticated)
      {
        this.navCtrl.setRoot('ContaPage');
        loading.dismiss();
      }
      else{
        this.miscProvider.createAlert("Erro!", null, "Erro ao fazer login com o twitter");
        loading.dismiss();
      }
    })
  }
}
