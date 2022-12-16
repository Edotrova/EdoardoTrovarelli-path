import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-components',
  templateUrl: './payment-components.component.html',
  styleUrls: ['./payment-components.component.css']
})


export class PaymentComponentsComponent implements OnInit {

  payment: boolean = true;

  constructor() { }

  ngOnInit(): void {
    var stripe = Stripe('pk_test_51MEYdfITZDYYAB2RBQxP4fb5j9W6hLlkc4b0cwwMui1pWLziYHEEgo8vBSlELlbuxKMXaADoVA9a7YRwWCURnznf002ikhJIbc');
    var elements = stripe.elements();
    // var card = elements.create('card');
   
var card = elements.create('card', {
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#87BBFD',
      },
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE',
    },
  },
});
// Add an instance of the card UI component into the `card-element` <div>
  card.mount('#card-element');
  // Create an style object which passes when card element is initialized





};
// Create an instance of the card UI component

// Remove Zip-code in card UI component
// var card = elements.create('card', { hidePostalCode: true, style: styleCard });

// card.addEventListener('change', function(event) {
//   var displayError = document.getElementById('card-errors');
//   if (event.error) {
//     displayError.textContent = event.error.message;
//   } else {
//     displayError.textContent = '';
//   }
// });
paymentSee(){
  this.payment=!this.payment
    
}
  }

  



 
