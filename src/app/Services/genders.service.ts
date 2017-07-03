import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { Gender } from '../Models/Genders/Gender';

import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Body} from "@angular/http/src/body";

@Injectable()
export class GendersService {

  constructor(private _http : Http) { }

  getAllGenders():Observable<Gender[]>
  {
    return this._http.get(environment.apiUrl+"Genders").map(this.extractData).catch(this.handleError);
  }

  createNewGender(gender: Gender)
  {
    let body  = JSON.stringify(gender);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});

    let temp = this._http.post(environment.apiUrl+'Genders',body,options).map(res=> console.info(res)).catch(this.handleError);
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
