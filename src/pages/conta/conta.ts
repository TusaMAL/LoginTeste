import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {
  constructor(
    private authProvider: AuthProvider,
    private navCtrl: NavController
  ) {
    // this.db.object(`usuarios/${this.user.uid}/nomeEquipe`).valueChanges().subscribe((resp) => {
    //   this.equipe = resp;
    // });
  }
  ionViewCanEnter() {
    if (this.authProvider.authenticated) {
      return true;
    }
    this.navCtrl.setRoot('LoginPage');
    return false;
  }
}
