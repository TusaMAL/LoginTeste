import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

//Components
import { ContaComponent } from './conta/conta';

@NgModule({
	declarations: [ContaComponent],
	imports: [IonicModule],
	exports: [ContaComponent]
})
export class ComponentsModule { }
