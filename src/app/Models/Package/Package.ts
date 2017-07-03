import {Subscribed} from "../Subscribed/Subscribed";
/**
 * Created by OMA on 20-Jun-17.
 */

export class Package
{
  packageId : number;
  packageName: string;
  packageDescription : string;
  isActive : boolean;
  dateCreated : Date;

  subscribed : Array<Subscribed>;


  constructor(packageId: number, packageName: string, packageDescription: string, isActive: boolean, dateCreated: Date, subscribed: Array<Subscribed>) {
    this.packageId = packageId;
    this.packageName = packageName;
    this.packageDescription = packageDescription;
    this.isActive = isActive;
    this.dateCreated = dateCreated;
    this.subscribed = subscribed;
  }
}
