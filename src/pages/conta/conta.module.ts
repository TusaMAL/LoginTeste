import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ContaPage } from './conta';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    ContaPage
  ],
  imports: [
    IonicPageModule.forChild(ContaPage),
    ComponentsModule    
  ],
})
export class ContaPageModule {}
