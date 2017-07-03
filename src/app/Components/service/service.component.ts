import { Component, OnInit } from '@angular/core';
import {Services} from "../../Models/Services/Services";
import {ServicesService} from "../../Services/services.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ServicePrice} from "../../Models/ServicePrice/ServicePrice";
import {PackageService} from "../../Services/package.service";
import {Package} from "../../Models/Package/Package";

import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import {LogInService} from "../../Services/log-in.service";

import {ContainsService} from "../../Services/contains.service";
import {Contains} from "../../Models/Contains/Contains";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  packageName = "";
  listServices;
  packageForm;

  servicesChecked;

  services: Services[];
  servicesForm;
  response: Object[];
  errorMessage;
  packages:Package[];

  containsForm;
  contains:Contains[];


  constructor(private router:Router, private servicesService: ServicesService, private _LogInService: LogInService, private packagesService:PackageService, private containsService:ContainsService) {
    this.listServices = [];
    this.servicesChecked = [];
  }

  ngOnInit() {
    this.packageForm = new FormGroup({
      packageName: new FormControl(""),
      packageDescription: new FormControl(""),
      isActive: new FormControl(true),
      dateCreated: new FormControl("")
    })
    this.servicesForm = new FormGroup({
      serviceName : new FormControl(""),
      serviceDescription : new FormControl(""),
      isActive : new FormControl(""),
      dateCreated : new FormControl(""),
      servicePrice : new FormControl("")
    })
    this.getAllServices();

    this.servicesService.getAllServices().subscribe(data => this.services = data,
      error => this.errorMessage = <any> error,
      () => console.log("Finished Services"+  console.log(JSON.stringify(this.services))));
    this.packagesService.getAllPackages().subscribe(data => this.packages = data,
      error => this.errorMessage = <any> error,
      () => console.log("Finished packages"+  console.log(JSON.stringify(this.packages))));

    this.containsForm = new FormGroup({

      dateAdded :  new FormControl(""),
      discount :  new FormControl(""),
      serviceId:  new FormControl(""),
      packageId :  new FormControl("")
    });
  }

getAllServices()
{
  this.servicesService.getAllServices().subscribe(data => this.services = data,
    error => this.errorMessage = <any> error,
    () => console.log("Finished "+  console.log(JSON.stringify(this.services))))
}

  createNewService(service)
  {
    let servicePrice = new ServicePrice(-1,service.dateCreated,service.servicePrice,-1);
    let serviceToCreate =  new Services(-1,service.serviceName,
      service.serviceDescription,
      service.isActive,
      service.dateCreated,null,servicePrice);
    this.servicesService.createNewService(serviceToCreate).subscribe(
      data => this.response = data, error => this.errorMessage = <any> error
      , () => console.log("Finished"  + this.response));
  }

  createNewPackage(_package)
  {
    let packageToCreate = new Package(-1, _package.packageName, _package.packageDescription, _package.isActive, _package.dateCreated, null);
    console.log(JSON.stringify(packageToCreate));
    this.packagesService.createNewPackage(packageToCreate).subscribe(
      data => this.response = data, error => this.errorMessage = <any> error
      , () => console.log("Finished"  + this.response));

  }
  // makePackage(service){
  //   this.listServices.push(service);
  //   console.log(this.packageName);
  //   console.log(this.listServices);
  // }


  // addService(){
  //   console.log(this.servicesChecked);
  // }

  onChange(service){
    if(service.checked){
      service.checked = false;
      this.removeItem(this.servicesChecked, service);
    }
    else{
      service.checked = true;
      this.servicesChecked.push(service);
    }

  }

  removeItem(array, item){
    for(var i in array){
      if(array[i]==item){
        array.splice(i,1);
        break;
      }
    }
  }


  getAllServicesForChoosenPacket(packetId:number)
  {}

  createNewContains(contains)
  {
    console.log(contains);

    console.log(JSON.stringify(contains));

    console.log(contains.serviceId);

    console.log(this.servicesChecked);
    console.log(JSON.stringify(this.servicesChecked));
    for (let serv of this.servicesChecked)
    {
      if (serv.checked) {
        let containsToCreate = new Contains(-1, contains.dateAdded, contains.discount, serv.serviceId, contains.packageId);
        this.containsService.createNewContains(containsToCreate).subscribe(
          data => this.response = data, error => this.errorMessage = <any> error
          , () => console.log(JSON.stringify(this.response)));
      }
    }
    let containsToCreate;
  }

}
