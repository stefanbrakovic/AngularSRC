import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import '../../../node_modules/rxjs/add/operator/map'
import {environment} from "../../environments/environment";
import {User} from "../Models/Users/User";
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import * as Url from "url";
import {Body} from "@angular/http/src/body";

@Injectable()
export class UserService {


  private url = environment.apiUrl;
  constructor(private _http: Http) { }

  getAllUsers():Observable<User[]>
  {
    return this._http.get(this.url+'Users').map(this.extractData).catch(this.handleError);
  }

  getUserByCardNumber(cardNumber:string):Observable<User>
  {
    return this._http.get(environment.apiUrl+'Users/'+cardNumber).map(this.extractData).catch(this.handleError);
  }


  create(user:User)
  {
    let body  = JSON.stringify(user);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});

    let temp = this._http.post(environment.apiUrl+'Users',body,options).map(res=> console.info(res)).catch(this.handleError);
    return temp;

    /*let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers ,
      url: environment.apiUrl+'Users',
      method: 'POST'

    });
    options.body = user;


    return this._http.post(options.url, user, {headers:  headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    // debugger;
    // let bodyString = JSON.stringify({"userId":1,"firstName":"","lastName":"","telephone":"","mail":"","userPassword":"","userTypeId":"1","genderId":"1","dateOfBirth":"2017-06-22","dateOfRegistration":"","street":"","city":"","streetNumber":"","provides":null,"subscribed":null,"uses":null});
    //var params = 'json=' +bodyString;
    //let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //let options       = new RequestOptions({ headers: headers });
    // var body = new Body({'raw'});
    // console.log(bodyString);
    // return this._http.post(this.url+'Users', user,
    // {headers:  headers, body:mojBody, params:params}).map(this.extractData).catch(this.handleError);
    /*return this._http.post(this.url+'Users', params, {headers:  headers}) // ...using post request
     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any*/
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



  /*
  constructor(private _http: Http) { }

  register()
  {
    return this._http.post("","",{});
  }


  getAllUsers()
  {

    //debugger;
    return this._http.get(environment.apiUrl+'Users')
      .map(res => res.json());

  }
  getUserByCardNumber(cardNumber:string)
  {

    //debugger;
    return this._http.get(environment.apiUrl+'Users/'+cardNumber)
      .map(res => res.json());

  }
   extract;
  CreateNewUser(user:User)
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});
   // console.log(user);
  //  console.log(environment.apiUrl+'Users');
      this._http.post(environment.apiUrl+'Users',user);
      let url = environment.apiUrl+'Users';
      console.log(JSON.stringify(user));



        return this._http.post(environment.apiUrl+'Users/', user, {headers})
         .map(this.extractData).catch(this.handleErrorObservable);


  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  */
}
