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

  createLoading(msgCarregamento: string): Loading{

    //Cria a caixa de loading: http://ionicframework.com/docs/api/components/loading/LoadingController/
      let loading: Loading = this.loadingCtrl.create({
      content: msgCarregamento,
      spinner: 'bubbles',
    });

    //Mostra o loading
    loading.present();

    return loading;
  }
  createAlert( msgTitulo: string, msgSubTitulo: string, msgCorpo: string){
    let alert = this.alertCtrl.create({
      title: msgTitulo,
      subTitle: msgSubTitulo,
      message: msgCorpo,
      buttons: ['OK']
    });
    alert.present();
  }

}
