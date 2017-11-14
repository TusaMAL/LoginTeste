import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';

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
  
  user: any;
  equipe: any = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private db: AngularFireDatabase
  ) {
    this.user = this.authProvider.currentUser.providerData[0];
    this.db.object(`usuarios/${this.user.uid}/nomeEquipe`).valueChanges().subscribe((resp) => {
      this.equipe = resp;
    });
  }

  ionViewDidLoad() {
    
  }

  signOut(){
    //Volta para a pagina de login
    this.authProvider.signOut()
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}
