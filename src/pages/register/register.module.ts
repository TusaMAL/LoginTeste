import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'

//Page
import { RegisterPage } from './register';

//Component Module
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    HttpModule,
    ComponentsModule
  ],
})
export class RegisterPageModule {}
