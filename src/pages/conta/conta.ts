import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

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
    private authProvider: AuthProvider
  ) {
    // this.db.object(`usuarios/${this.user.uid}/nomeEquipe`).valueChanges().subscribe((resp) => {
    //   this.equipe = resp;
    // });
  }

  ionViewCanEnter() { 
      return this.authProvider.authenticated;
  }

}
