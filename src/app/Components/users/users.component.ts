import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User} from '../../Models/Users/User';
import {forEach} from "@angular/router/src/utils/collection";
import {FormGroup, FormControl, Validators} from "@angular/forms"
import {error} from "selenium-webdriver";
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit
{
  form;
  @Input() userToCreate:User;

  constructor(private router:Router, private _usersService : UserService ){ }
  users : User[];

// ^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$

  ngOnInit(){
    this.form = new FormGroup({
      userTypeId: new FormControl(""),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      telephone: new FormControl("", Validators.required),
      mail: new FormControl("", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      userPassword: new FormControl("", Validators.required),
      userType: new FormControl("", Validators.required),
      genderId: new FormControl("", Validators.required),
      day: new FormControl("", Validators.required),
      month: new FormControl("", Validators.required),
      year: new FormControl("", Validators.required),
      street: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      streetNumber: new FormControl("", Validators.required),
      dateOfBirth: new FormControl("", Validators.required),
      cardNumber : new FormControl("", Validators.required)
    })
  };
  getAllUsers()
  {
    console.log();
    this._usersService.getAllUsers()
      .subscribe(
        data =>  this.users = data,
        error => this.errorMessage = <any>error,
        () => console.log("Finished "+ this.users)
    );
  };




  response:Object[];
  errorMessage;
  createNewUser(user)
  {
    //console.log(user);
    let fd:FormData;
    fd = user;
    this.userToCreate  = new User(1, user.firstName, user.lastName,user.telephone,user.mail,
    user.userPassword, user.userType, user.genderId,user.dateOfBirth,"",user.street,user.city,user.streetNumber,null,null,null, user.cardNumber );

    //console.log(JSON.stringify(this.userToCreate))
    console.log(fd);
    // this._usersService.create(this.userToCreate)
    this._usersService.create(this.userToCreate).subscribe(data => this.response = data,
      error => this.errorMessage = <any> error
      , () => console.log("Finished"  + this.response));/*
        .subscribe(
          data => this.userToCreate = data,
          response => this.response = response,
          error => this.errorMessage = <any>error,
            () => console.log("Finished "+ this.postData)
   );*/


  }



}
/*
const asd : User[] =
  [{"userId":1,"firstName":"asd","lastName":"asd","telephone":"123","mail":"asd@1asd","userPassword":"123","userTypeId":7,"genderId":1,"dateOfBirth":"2001-05-31T00:00:00","dateOfRegistration":"2017-05-31T01:05:04.053","street":"sad","city":"asd","streetNumber":"12","provides":[],"subscribed":[],"uses":[]},{"userId":14,"firstName":"asd","lastName":"asd","telephone":"123","mail":"asd@1ashd","userPassword":"123","userTypeId":7,"genderId":1,"dateOfBirth":"2001-05-31T00:00:00","dateOfRegistration":"2017-05-31T01:56:07.887","street":"sad","city":"asd","streetNumber":"12","provides":[],"subscribed":[],"uses":[]},{"userId":16,"firstName":"asd","lastName":"asd","telephone":"123","mail":"asd@1ashdf","userPassword":"123","userTypeId":7,"genderId":1,"dateOfBirth":"2001-05-31T00:00:00","dateOfRegistration":"2017-06-07T09:40:58.007","street":"sad","city":"asd","streetNumber":"12","provides":[],"subscribed":[],"uses":[]}];

const heroes : User[] =
 [{"userId":1,
   "firstName":"asd",
   "lastName":"asd",
   "telephone":"123",
   "mail":"asd@1asd",
   "userPassword":"123",
   "userTypeId":7,
   "genderId":1,
   "dateOfBirth":"2001-05-31T00:00:00",
   "dateOfRegistration":"2017-05-31T01:05:04.053",
   "street":"sad",
   "city":"asd",
   "streetNumber":"12",
   "provides":[],"subscribed": [],"uses":[]},
   {"userId":1,
     "firstName":"asd",
     "lastName":"asd",
     "telephone":"123",
     "mail":"asd@1asd",
     "userPassword":"123",
     "userTypeId":7,
     "genderId":1,
     "dateOfBirth":"2001-05-31T00:00:00",
     "dateOfRegistration":"2017-05-31T01:05:04.053",
     "street":"sad",
     "city":"asd",
     "streetNumber":"12",
     "provides": [],
     "subscribed": [],
     "uses":[]}];
*/
export class Hero {
  id: number;
  name: string;
}
