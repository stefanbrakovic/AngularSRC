import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";

@Injectable()
export class SubscriptionService {

  constructor(private _http : Http) { }

  getAllSubscriptions()
  {
    return this._http.get(environment.apiUrl+"Subscribeds").map(res=>res.json())
  }

  getServicePriceById(id:number)
  {
    return this._http.get(environment.apiUrl+"Subscribeds/"+id).map(res=>res.json())
  }

}
