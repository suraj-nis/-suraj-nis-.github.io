import { Component } from '@angular/core'; /* import component for organization from angular */

@Component({
  templateUrl: './contact.component.html', /*use this html file that we created*/
  styleUrls: ['./contact.component.css'] /* use this css file that we created */

})
export class ContactComponent {
  public pageTitle = 'Contact'; /* every other componenent now knows this as the ContactComponeent*/
  submit: boolean = true; /* submit variable for toggling html page */
  back: boolean = false; /* back variable for toggling html page */


submit_toggle(): void { /* Actual method used for toggling html page */
  this.submit = !this.submit; /* toggle the variable, makes it the opposite True/ False */
  this.back=!this.back /* toggle the variable, makes it the opposite True/ False */
 
}
}