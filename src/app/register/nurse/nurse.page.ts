import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Service1Service } from 'src/app/providers/service1.service';
import { ServicetypePage } from 'src/app/servicetype/servicetype.page';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.page.html',
  styleUrls: ['./nurse.page.scss'],
})
export class NursePage implements OnInit {
  usernamenu: any;
  passwordnu: any;
  namenu: any;
  surnamenu: any;
  phonenu: any;
  addressnu: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private service1: Service1Service, ) { }

  ngOnInit() {
  }
  backpage() {
    this.navCtrl.push('RegisterPage');
  }
  regisnu() {
    var parameter = {username: this.usernamenu,
      password: this.passwordnu,
      name: this.namenu,
      surname: this.surnamenu,
      phoneno: this.phonenu,
      address: this.addressnu};
    console.log(parameter);
    this.service1.register2(parameter).then((data) => {
    console.log(data);
    if(data.affectedRows == 1) {
    this.navCtrl.push(ServicetypePage);
    }
    });
  }
}
