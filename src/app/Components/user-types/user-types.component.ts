import { Component, OnInit } from '@angular/core';
import {UserTypeService} from "../../Services/user-type.service";
import {UserType} from "../../Models/UserTypes/UserTypes";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.css']
})
export class UserTypesComponent implements OnInit {

  constructor(private userTypeService : UserTypeService) { }
  userTypes : UserType[];
  userTypesForm;
  errorMessage;
  response;


  ngOnInit() {
    this.userTypesForm = new FormGroup({
      typeName : new FormControl(""),
      typeDescription : new FormControl("")
    })
  }

  getAllUserTypes()
  {
    console.log("Usao u get all genders");
    this.userTypeService.getAllUserTypes().subscribe(
      data =>  this.userTypes = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished "+  console.log(JSON.stringify(this.userTypes)))//JSON.stringify(this.genders))
    );

  }

  createNewUserType(userType)
  {
    console.log(userType+"usao u create new user type");
    let userTypeToCreate = new UserType(-1, userType.typeName, userType.typeDescription);

    this.userTypeService.createNewUserType(userTypeToCreate).subscribe(
      data => this.response = data, error => this.errorMessage = <any> error
      , () => console.log("Finished"  + this.response));


  }


}
