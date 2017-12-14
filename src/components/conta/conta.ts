import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { MiscProvider } from './../../providers/misc/misc';
import { User } from '../../models/user';


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
    this.user = new User();
    this.user = this.authProvider.currentUser;
  }

  signOut() {
    let loading = this.miscProvider.createLoading('Saindo...');
    //Volta para a pagina de login
    this.authProvider.signOut().then(success => {
      this.navCtrl.setRoot('LoginPage');
      loading.dismiss();
    }).catch(error => {
      console.log(error);
      loading.dismiss();
    });
  }
}
