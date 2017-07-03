import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Contains} from "../Models/Contains/Contains";
import 'rxjs/add/operator/catch';

@Injectable()
export class ContainsService {

  constructor(private _http : Http) { }

  getAllContains():Observable<Contains>
  {
    return this._http.get(environment.apiUrl+"Contains").map(res=>res.json())
  }

  createNewContains(contains:Contains):Observable<Object[]>
  {
    let body =  JSON.stringify(contains);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    console.log("usao hoj hoj hoj u contains");

    return this._http.post(environment.apiUrl+"Contains",body,options)
      .map(this.extractData)
      .catch(this.handleError);
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
