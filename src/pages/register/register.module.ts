import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'

import { RegisterPage } from './register';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
})
export class RegisterPageModule {}
