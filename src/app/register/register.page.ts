import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  navCtrl: any;

  constructor() { }

  ngOnInit() {
  }
  backpage() {
    this.navCtrl.push('FirstPage');
  }
  tocustomer() {
    this.navCtrl.push('CustomerPage');
  }
  tonurse() {
    this.navCtrl.push('NursePage');
  }
}
