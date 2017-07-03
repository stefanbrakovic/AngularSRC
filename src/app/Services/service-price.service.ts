import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ServicePriceService {

  constructor(private _http : Http) { }

  getAllServicePrices()
  {
    return this._http.get(environment.apiUrl+"ServicePrice").map(res=>res.json())
  }

  getServicePriceById(id:number)
  {
    return this._http.get(environment.apiUrl+"ServicePrice/"+id).map(res=>res.json())
  }
}
