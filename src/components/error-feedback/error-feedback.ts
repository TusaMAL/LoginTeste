import { Component, Input } from '@angular/core';

/**
 * Generated class for the ErrorFeedbackComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'error-feedback',
  templateUrl: 'error-feedback.html'
})
export class ErrorFeedbackComponent {

  //reactive error
  @Input() errorMsg: string;

  constructor() {
  }

}
