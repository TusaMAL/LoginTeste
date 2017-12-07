import { Component } from '@angular/core';

import { AuthProvider } from '../../providers/auth/auth';
import { MiscProvider } from './../../providers/misc/misc';
import { User } from '../../models/user';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the ContaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'conta',
  templateUrl: 'conta.html'
})
export class ContaComponent {

  user: User;

  constructor(
    public navCtrl: NavController,
    private authProvider: AuthProvider,
    private miscProvider: MiscProvider
  ) {
    try{
      this.user = this.authProvider.currentUser.providerData[0];
    }
    catch(error){
      
    }
  }

  signOut() {
    let loading = this.miscProvider.createLoading('Saindo...');
    //Volta para a pagina de login
    this.authProvider.signOut().then(success => {
      this.navCtrl.setRoot(LoginPage)
      loading.dismiss();
    }).catch(error => {
      console.log(error);
      loading.dismiss();
    });
  }

}
