import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcurrency',
  imports: [FormsModule],
  templateUrl: './addcurrency.html',
  styleUrl: './addcurrency.css',
})
export class Addcurrency {
  fromCurrency = '';
  toCurrency = '';
  @Output() onSubmitOutput = new EventEmitter();

  onSubmit() {
    this.onSubmitOutput.emit({
      from: this.fromCurrency.toUpperCase(),
      to: this.toCurrency.toUpperCase(),
    });
    this.fromCurrency = '';
    this.toCurrency = '';
  }
}
