import { NgModule } from '@angular/core';
import { ContaComponent } from './conta/conta';
import { IonicModule } from 'ionic-angular';
import { ErrorFeedbackComponent } from './error-feedback/error-feedback';
@NgModule({
	declarations: [ContaComponent,
    ErrorFeedbackComponent],
	imports: [IonicModule],
	exports: [ContaComponent,
    ErrorFeedbackComponent]
})
export class ComponentsModule {}
