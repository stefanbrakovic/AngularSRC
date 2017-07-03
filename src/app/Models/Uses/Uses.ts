import {User} from "../Users/User";
/**
 * Created by OMA on 17-Jun-17.
 */
export class Uses
{
  UsageId :number;
  UserId : number;
  ServiceId  : number;
  DateFrom : Date;
  DateTo: Date;

  User : User;


  constructor(UsageId: number, UserId: number, ServiceId: number, DateFrom: Date, DateTo: Date, User: User) {
    this.UsageId = UsageId;
    this.UserId = UserId;
    this.ServiceId = ServiceId;
    this.DateFrom = DateFrom;
    this.DateTo = DateTo;
    this.User = User;
  }
}
