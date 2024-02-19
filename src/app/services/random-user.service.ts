import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRandonContact} from "../models/randomUser";

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  getRandomContact(): Observable<any>{
    return this.http.get('https://randomuser.me/api')
  }
}
