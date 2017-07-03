import {User} from "../Users/User";
import {Services} from "../Services/Services";
/**
 * Created by OMA on 17-Jun-17.
 */

export class Provides
{
  ProvidesId : number;
  UserId : number;
  ServiceId : number;
  DateFrom : Date;
  DateTo : Date;
  Service : Services;
  User : User;


  constructor(ProvidesId: number, UserId: number, ServiceId: number, DateFrom: Date, DateTo: Date, Service: Services, User: User) {
    this.ProvidesId = ProvidesId;
    this.UserId = UserId;
    this.ServiceId = ServiceId;
    this.DateFrom = DateFrom;
    this.DateTo = DateTo;
    this.Service = Service;
    this.User = User;
  }
}
