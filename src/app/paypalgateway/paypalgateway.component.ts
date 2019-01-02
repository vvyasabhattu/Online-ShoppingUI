import { Component, OnInit } from '@angular/core';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
@Component({
  selector: 'app-paypalgateway',
  templateUrl: './paypalgateway.component.html',
  styleUrls: ['./paypalgateway.component.css']
})
export class PaypalgatewayComponent implements OnInit {

  public payPalConfig?: PayPalConfig;

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AQJgIc9_E-sLwBN5Q674xefJRJJlwLLv6Pk8nimAolWs6kWv1tgJGqCjHmNt19bpfnEb2VwhBlhozWZN'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'INR',
          total: 9
        }
      }]
    });
  }
}





  