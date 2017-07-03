import { Component, OnInit } from '@angular/core';
import {Package} from "../../../Models/Package/Package";
import {FormControl, FormGroup} from "@angular/forms";
import {PackageService} from "../../../Services/package.service";

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  constructor(private packagesService:PackageService) { }

  errorMessage;
    response:Object[];
    packages:Package[];
    packageForm;
    ngOnInit() {
    this.packageForm = new FormGroup({
      packageName: new FormControl(""),
      packageDescription: new FormControl(""),
      isActive: new FormControl(true),
      dateCreated: new FormControl("")
    })
  }

  getAllPackages()
  {
    this.packagesService.getAllPackages().subscribe(data => this.packages = data,
      error => this.errorMessage = <any> error,
      () => console.log("Finished "+  console.log(JSON.stringify(this.packages))))
  }

  createNewPackage(_package)
  {
    let packageToCreate = new Package(-1, _package.packageName, _package.packageDescription, _package.isActive, _package.dateCreated, null);
    console.log(JSON.stringify(packageToCreate));
    this.packagesService.createNewPackage(packageToCreate).subscribe(
      data => this.response = data, error => this.errorMessage = <any> error
      , () => console.log("Finished"  + this.response));

  }

}
