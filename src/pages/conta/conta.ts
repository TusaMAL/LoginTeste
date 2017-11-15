import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { MiscProvider } from '../../providers/misc/misc';

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
  
  user: any = null;
  equipe: any = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private db: AngularFireDatabase,
    private miscProvider: MiscProvider
  ) {
    if(this.authProvider.authenticated){
      this.user = this.authProvider.currentUser.providerData[0];
    }
    // this.db.object(`usuarios/${this.user.uid}/nomeEquipe`).valueChanges().subscribe((resp) => {
    //   this.equipe = resp;
    // });
  }

  signOut(){
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
