import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Services} from "../Models/Services/Services";

@Injectable()
export class ServicesService {

  constructor(private _http : Http) { }

  getAllServices():Observable<Services[]>
  {
    return this._http.get(environment.apiUrl+"Services").map(res=>res.json())
  }

  getServiceById(serviceName:string):Observable<Services>
  {
    return this._http.get(environment.apiUrl+"Services/"+serviceName).map(res=>res.json())
  }

  createNewService(service:Services)
  {
    let body  = JSON.stringify(service);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});

    let temp = this._http.post(environment.apiUrl+'Services',body,options).map(res=> console.info(res)).catch(this.handleError);
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
