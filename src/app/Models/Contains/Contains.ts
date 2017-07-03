/**
 * Created by OMA on 17-Jun-17.
 */
export class Contains
{
  ContainsId : number;
  DateAdded : Date;
  Discount : number;
  ServiceId: number;
  PackageId : number;


  constructor(ContainsId: number, DateAdded: Date, Discount: number, ServiceId: number, PackageId: number) {
    this.ContainsId = ContainsId;
    this.DateAdded = DateAdded;
    this.Discount = Discount;
    this.ServiceId = ServiceId;
    this.PackageId = PackageId;
  }
}
