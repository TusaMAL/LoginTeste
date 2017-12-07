import { ContaComponent } from './../../components/conta/conta';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContaPage } from './conta';

@NgModule({
  declarations: [
    ContaPage,
    ContaComponent
  ],
  imports: [
    IonicPageModule.forChild(ContaPage),
  ],
})
export class ContaPageModule {}
