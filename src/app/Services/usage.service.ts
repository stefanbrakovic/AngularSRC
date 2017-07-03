import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class UsageService {

  constructor(private _http : Http) { }

  getAllUses()
  {
    return this._http.get(environment.apiUrl+"Uses").map(res=>res.json())
  }

  getUsesByUserId(id:number)
  {
    return this._http.get(environment.apiUrl+"Uses/"+id).map(res=>res.json())
  }

}
