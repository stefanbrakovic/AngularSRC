import { Component, OnInit } from '@angular/core';
import {ContainsService} from "../../Services/contains.service";
import {Contains} from "../../Models/Contains/Contains";
import {FormControl, FormGroup} from "@angular/forms";
import {Services} from "../../Models/Services/Services";
import {Package} from "../../Models/Package/Package";
import {ServicesService} from "../../Services/services.service";
import {PackageService} from "../../Services/package.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-contains',
  templateUrl: './contains.component.html',
  styleUrls: ['./contains.component.css']
})
export class ContainsComponent implements OnInit {

  servicesChecked;

  constructor(private containsService:ContainsService, private servicesService: ServicesService, private packagesService:PackageService) {
    this.servicesChecked = [];
  }

  errorMessage;
  response;
  containsForm;
  contains:Contains[];
  services:Services[];
  packages:Package[];


  ngOnInit() {

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
  // checked : Services[];
  // updateCheckedServices(service:Services, event)
  // {
  //
  //   this.checked.push(service);
  //
  //   console.log(this.checked)
  //
  // }

  addService(){
    console.log(this.servicesChecked);
  }

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
