import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

//Components
import { ContaComponent } from './conta/conta';
import { ErrorFeedbackComponent } from './error-feedback/error-feedback';

@NgModule({
	declarations: [ContaComponent,
		ErrorFeedbackComponent],
	imports: [IonicModule],
	exports: [ContaComponent,
		ErrorFeedbackComponent]
})
export class ComponentsModule { }
