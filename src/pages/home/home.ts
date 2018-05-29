import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ApplePay} from '@ionic-native/apple-pay';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results: any;

  constructor(
    public navCtrl: NavController,
    public applePay: ApplePay) {
  }

  canMakePayments() {
    this.applePay.canMakePayments().then((message) => {
      console.log(message);
      this.results = message;
    }).catch((message) => {
      console.log(message);
      this.results = message;
    });
  }

}
