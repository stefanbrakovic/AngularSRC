import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers,Response} from "@angular/http";
import '../../../node_modules/rxjs/add/operator/map'
import {environment} from "../../environments/environment";
import {UserType} from "../Models/UserTypes/UserTypes";

import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Body} from "@angular/http/src/body";

@Injectable()
export class UserTypeService {

  constructor(private _http : Http) { }

  getAllUserTypes()
  {
    return this._http.get(environment.apiUrl+"UserTypes").map(res=>res.json())
  }

  getUserTypeByName(typeName : string)
  {
    return this._http.get(environment.apiUrl+"UserTypes/"+typeName).map(res=>res.json())
  }

  createNewUserType(userType : UserType):Observable<string>
  {
    let body  = JSON.stringify(userType);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});

    let temp = this._http.post(environment.apiUrl+'UserTypes',body,options).map(res=> console.info(res)).catch(this.handleError);
    return temp;

  }

  private extractData(res: Response)
  {
    //return res.json();
    let body = res.json();
    return body || { };
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
