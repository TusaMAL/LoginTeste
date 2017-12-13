import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

//Pages
import { ContaPage } from './conta';

//Components
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    ContaPage
  ],
  imports: [
    IonicPageModule.forChild(ContaPage)
  ],
})
export class ContaPageModule { }
