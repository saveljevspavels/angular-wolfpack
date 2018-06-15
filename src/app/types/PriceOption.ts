export default class PriceOption {
    value: number;
    currency: string;
    description: string;
    constructor(value, currency, description) {
      this.value = value;
      this.currency = currency;
      this.description = description;
    }
  }