import { Component } from '@angular/core';
import PriceOption from '../../types/PriceOption'

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})

export class SubscriptionComponent {
  title = 'Share as you go!';
  email = '';
  emailValid = false;
  priceOptions = [
    new PriceOption(120, 'EUR', 'monthly'),
    new PriceOption(40, 'EUR', 'weekly')
  ]

  selectedPrice = this.priceOptions[0];
  
  emailChangedHandler(email: string) {
    this.email = email;
  }

  emailValidHandler(valid: boolean) {
    this.emailValid = valid
  } 

  selectedPriceChangedHandler(selectedPrice: PriceOption) {
    this.selectedPrice = selectedPrice;
  }

  sendRequest() {
    console.log('Subsription request was sent', [this.email, this.selectedPrice])
  }
}
