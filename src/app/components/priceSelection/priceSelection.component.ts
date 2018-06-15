import { Component, Input, Output, EventEmitter } from '@angular/core';
import PriceOption from '../../types/PriceOption'

@Component({
  selector: 'app-priceSelection',
  templateUrl: './priceSelection.component.html',
  styleUrls: ['./priceSelection.component.scss']
})
export class PriceSelectionComponent {
  @Input() priceOptions: Array<PriceOption>;
  @Input() selectedPrice: PriceOption;

  @Output() selectedPriceChanged: EventEmitter<PriceOption> = new EventEmitter();
 
  priceChange(price) {
    this.selectedPrice = price;
    this.selectedPriceChanged.emit(this.selectedPrice);
  }
}
