import {Provides} from "../Provides/Provides";
import {ServicePrice} from "../ServicePrice/ServicePrice";
/**
 * Created by OMA on 17-Jun-17.
 */
export class Services
{

  serviceId : number;
  serviceName : string;
  serviceDescription : string;
  isActive: boolean;
  dateCreated : Date;

  provides : Array<Provides>;
  servicePrice : Array<ServicePrice>;

  checked: boolean;


  constructor(serviceId: number, serviceName: string, serviceDescription: string, isActive: boolean, dateCreated: Date, provides: Array<Provides>, servicePrice: ServicePrice) {
    this.serviceId = serviceId;
    this.serviceName = serviceName;
    this.serviceDescription = serviceDescription;
    this.isActive = isActive;
    this.dateCreated = dateCreated;
    this.provides = provides;

    let newList : Array<ServicePrice> = [
      servicePrice
    ];
    this.servicePrice = newList;

    this.checked = false;


  }


}
