import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) {}

  getTotalValueOf(name: string, date: string){
    return this.http.get('/server/api/production/machines?date=' + date);
  }

  getRuntime(date: string){
    return this.http.get('/server/api/runtime/time?date=' + date);
  }

}
