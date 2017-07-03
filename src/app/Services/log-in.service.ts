import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {User} from "../Models/Users/User";
import {environment} from "../../environments/environment";
import {Body} from "@angular/http/src/body";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';

@Injectable()
export class LogInService {

  private isUserLoggedIn;
  private username;

  constructor(private _http: Http) {
    this.isUserLoggedIn = false;
  }

  logIn(user:User):Observable<User>
  {
    let body =  JSON.stringify(user);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    console.log("usao hoj hoj hoj u log in");

    return this._http.post(environment.apiUrl+"Login",body,options)
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

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }



}
