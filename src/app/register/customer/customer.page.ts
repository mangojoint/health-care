import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Service1Service } from 'src/app/providers/service1.service';
import { ServicetypePage } from 'src/app/servicetype/servicetype.page';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  usernamecus: any;
  passwordcus: any;
  namecus: any;
  surnamecus: any;
  phonecus: any;
  addresscus: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private service1: Service1Service, ) { }
  public regis() {
    var parameter = {username: this.usernamecus,
                     password: this.passwordcus,
                     name: this.namecus,
                     surname: this.surnamecus,
                     phoneno: this.phonecus,
                     address: this.addresscus};
    console.log(parameter);
    this.service1.register(parameter).then((data) => {
      console.log(data);
      if(data.affectedRows == 1) {
        this.navCtrl.push(ServicetypePage);
        }
   });
   }
  ngOnInit() {
  }
  backpage() {
    this.navCtrl.push('RegisterPage');
  }
}
