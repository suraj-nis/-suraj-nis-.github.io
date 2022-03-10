/* Just typescript file, handling all of the backend 
   Note this is not all the code their are many other parts to this component*/

import { Component } from '@angular/core'; /* Using Angular Components */


@Component({
  templateUrl: './purchase.component.html', /* Component uses this html file created in the same folder */
  styleUrls: ['./purchase.component.css', './w3.css'] 
  /* Component uses this css file created in the same folder and w3 public css file */

})
export class PurchaseComponent {
  public pageTitle = 'purchase'; /* allows each component to understand which page it is */
  pricing: boolean = true;/* Creating a Variable to decide wheter or not the pricing html should be shown */
  purchase: boolean = false; /* Creating a Variable to decide wheter or not the purchasing html should be shown */
  choice:string = "default";/* Creating a Variable to let the computer know what purchase choice the user picked*/
  price_choice = 0; /* Creating a variable to let the computer what the price of the purchase choice is*/
  completed_purchase = false; /* Checks if all requirements are met to purchase*/
  final_choice = "defualt" /* the final purchase choice the user has that will be sent to the database */

  pricing_toggle(): void { /* method to toggle wheter or not the pricing or purchase html should be shown in the html file */
    this.pricing = !this.pricing
    this.purchase = !this.purchase
  }
  choice_basic(): void { /*   (basic) method that shows what choice the user made in the shopping cart */
    this.choice="Basic Option"
    this.price_choice=25;
    console.log("basic option was chosen")
    this.pricing = !this.pricing
    this.purchase = !this.purchase
  }
  choice_premium(): void{ /*  (premium)method that shows what choice the user made in the shopping cart */
    this.choice="Premium"
    this.price_choice=75;
    this.pricing = !this.pricing
    this.purchase = !this.purchase
  }
  choice_ultra_premium(): void{ /* (ultra premium)method that shows what choice the user made in the shopping cart */
    this.choice="Ultra Premium"
    this.price_choice=100;
    this.pricing = !this.pricing
    this.purchase = !this.purchase
  }
  complete_purchase(): void {  /* converts price to shopping cart so it can display to use what they bought */
    this.final_choice = this.choice
    this.completed_purchase = true
    this.pricing=false
    /* navigates between purchase components */

  }

  
  
}

