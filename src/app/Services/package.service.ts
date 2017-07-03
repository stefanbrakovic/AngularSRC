import { Injectable } from '@angular/core';

import {Http, Headers, RequestOptions, Response} from "@angular/http";
import '../../../node_modules/rxjs/add/operator/map'
import {environment} from "../../environments/environment";
import {Package} from "../Models/Package/Package";
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import * as Url from "url";
import {Body} from "@angular/http/src/body";

@Injectable()
export class PackageService {

  constructor(private _http:Http) { }

  getAllPackages():Observable<Package[]>
  {
    return  this._http.get(environment.apiUrl+'Packages').map(this.extractData).catch(this.handleError);
  }

  createNewPackage(_package:Package)
  {
    let body  = JSON.stringify(_package);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});

    let temp = this._http.post(environment.apiUrl+'Packages',body,options).map(res=> console.info(res)).catch(this.handleError);
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
