import { Component, OnInit } from '@angular/core';
import { Gender } from '../../Models/Genders/Gender';
import {GendersService} from "../../Services/genders.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-genders',
  templateUrl: './genders.component.html',
  styleUrls: ['./genders.component.css']
})
export class GendersComponent implements OnInit {

  constructor(private gendersService : GendersService) { }

  genders : Gender[];
  gendersForm;

  ngOnInit() {
    this.gendersForm = new FormGroup({
        genderName : new FormControl("")
    })
  }

  response: Object[];
  errorMessage;

  getAllGenders()
  {
    console.log("Usao u get all genders");
    this.gendersService.getAllGenders().subscribe(
      data =>  this.genders = data,
      error => this.errorMessage = <any>error,
      () => console.log("Finished "+  console.log(JSON.stringify(this.genders)))//JSON.stringify(this.genders))
    );

  }

  createNewGender(gender)
  {
    console.log(gender);
    let genderToCreate = new Gender(-1, gender.genderName);

    this.gendersService.createNewGender(genderToCreate).subscribe(
      data => this.response = data, error => this.errorMessage = <any> error
      , () => console.log("Finished"  + this.response));

  }

}
