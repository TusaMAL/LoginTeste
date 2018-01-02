import { Injectable } from '@angular/core';
import { LoadingController, Loading, AlertController } from 'ionic-angular';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MiscProvider {
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
  }
  //Ionic 3 loading controller docs http://ionicframework.com/docs/api/components/loading/LoadingController/
  createLoading(msgCarregamento: string): Loading {
    const loading: Loading = this.loadingCtrl.create({
      content: msgCarregamento,
      spinner: 'bubbles',
    });

    //Mostra o loading
    loading.present();

    return loading;
  }
  //Ionic 3 alert controller https://ionicframework.com/docs/api/components/alert/AlertController/
  createAlert(msgTitulo: string, msgSubTitulo: string, msgCorpo: string) {
    const alert = this.alertCtrl.create({
      title: msgTitulo,
      subTitle: msgSubTitulo,
      message: msgCorpo,
      buttons: ['OK']
    });
    alert.present();
  }

}
