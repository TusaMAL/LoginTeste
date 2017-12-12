import { NgModule } from '@angular/core';
import { ContaComponent } from './conta/conta';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ContaComponent],
	imports: [IonicModule],
	exports: [ContaComponent]
})
export class ComponentsModule {}
