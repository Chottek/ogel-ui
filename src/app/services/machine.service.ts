import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) {}

  getTotalValueOf(date: string){    // get data from api -> production
    return this.http.get('/server/api/production?date=' + date);
  }

  getRuntime(date: string){   // get data from api -> runtime
    return this.http.get('/server/api/runtime?date=' + date);
  }

  getDates(){    // get dates from api -> production
    return this.http.get('/server/api/production/dates');
  }

  getOee(date: string){
    return this.http.get('/server/api/runtime/oee?date=' + date);
  }

  getHourlyValues(date: string){
    return this.http.get('/server/api/production/hourly?date=' + date);
  }

}
