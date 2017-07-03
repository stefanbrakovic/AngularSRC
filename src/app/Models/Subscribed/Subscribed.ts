import {User} from "../Users/User";
import {Package} from "../Package/Package";
/**
 * Created by OMA on 17-Jun-17.
 */
export class Subscribed
{
  SubscribedId : number;
  DateFrom : Date;
  DateTo : Date;
  UserId : number;
  PackageId : number;

  Package: Package;
  User: User;

}
