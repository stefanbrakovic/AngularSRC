import {Subscribed} from '../Subscribed/Subscribed';
import {Provides} from "../Provides/Provides";
import {Uses} from "../Uses/Uses";

export class User
{
        userId : number;
        firstName :string;
        lastName :string;
        telephone  :string;
        mail :string;
        userPassword  :string;
        userTypeId : number;
        genderId: number;
        dateOfBirth : string; // can be null
        dateOfRegistration : string;
        street  :string;
        city  :string;
        streetNumber  :string;
        provides: Array<Provides>;
        subscribed:  Array<Subscribed>;
        uses: Array<Uses>;
        cardNumber : string;
        constructor(userId:number,firstName :string,
  lastName :string,
  telephone  :string,
  mail :string,
  userPassword  :string,
  userTypeId : number,
  genderId: number,
  dateOfBirth : string, // can be null
  dateOfRegistration : string,
  street  :string,
  city  :string,
  streetNumber  :string,
  provides: Array<Provides>,
  subscribed: Array<Subscribed>,
  uses: Array<Uses>,
                    cardNumber : string)
        {
          this.userId = userId;
          this.firstName = firstName;
          this.lastName = lastName;
          this.telephone = telephone;
          this.mail = mail;
          this.userPassword = userPassword;
          this.userTypeId = userTypeId;
          this.genderId = genderId;
          this.dateOfBirth = dateOfBirth;
          this.dateOfRegistration = dateOfRegistration;
          this.street = street;
          this.city = city;
          this.streetNumber = streetNumber;
          this.provides = provides;
          this.subscribed = subscribed;
          this.uses = uses;
          this.cardNumber = cardNumber;
        };


  /*
     constructor(userInfo:any)
     {
        this.userId = userInfo.userId;
        this.firstName = userInfo.firstName;
        this.lastName = userInfo.lastName;
        this.telephone = userInfo.telephone;
        this.mail = userInfo.mail;
        this.userPassword = userInfo.userPassword;
        this.userTypeId = userInfo.userTypeId;
        this.genderId = userInfo.genderId;
        this.dateOfBirth = userInfo.dateOfBirth;
        this.dateOfRegistration = userInfo.dateOfRegistration;
        this.street = userInfo.street;
        this.city = userInfo.city;
        this.streetNumber = userInfo.streetNumber;
        this.provides = userInfo.provides;
        this.subscribed = userInfo.subscribed;
        this.uses = userInfo.uses;
     }*/
}
