import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Service1Service } from '../providers/service1.service';
import { RouterLink } from '@angular/router';
import { RegisterPage } from '../register/register.page';

@Component({
  selector: 'app-firsts',
  templateUrl: './firsts.page.html',
  styleUrls: ['./firsts.page.scss'],
})
export class FirstsPage implements OnInit {
  navCtrl: any;
  usernamefirstpage: any = '';
  passwordfirstpage: any = '';
  constructor(private http: HttpClient, private service1: Service1Service ) { }
  opennextpage() {

  }
  openregisterpage() {
    this.navCtrl.push('RegisterPage');
  }
  ngOnInit() {
  }

}
