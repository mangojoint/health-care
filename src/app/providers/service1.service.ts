import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(public http: HttpClient) {
  }
  public register(parameter){
    return this.http.post('http://localhost:1880/patient', parameter).toPromise();
  }
  public register2(parameter){
    return this.http.post('http://localhost:1880/traineenurse', parameter).toPromise();
  }
}
