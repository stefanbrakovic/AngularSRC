import {Services} from "../Services/Services";
/**
 * Created by OMA on 17-Jun-17.
 */
export class ServicePrice
{
  ServiceId : number;
  DateModified : Date;
  Price : number;
  PriceId : number;

  Service : Services;


  constructor(ServiceId: number, DateModified: Date, Price: number, PriceId: number) {
    this.ServiceId = ServiceId;
    this.DateModified = DateModified;
    this.Price = Price;
    this.PriceId = PriceId;

  }
}
