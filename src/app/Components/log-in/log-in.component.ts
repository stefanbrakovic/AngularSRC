import { Component, OnInit } from '@angular/core';
import {LogInService} from "../../Services/log-in.service";
import {User} from "../../Models/Users/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  LogInForm;
  userToLogIn: User;
  constructor(private router:Router, private _LogInService: LogInService) { }
  response:User;
  errorMessage;
  ngOnInit() {
    this.LogInForm = new FormGroup({
      mail: new FormControl("", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      userPassword: new FormControl("")
    })
  };
  LogIn(user)
  {
    console.log(user);
    this.userToLogIn = new User(1,"","","",user.mail,user.userPassword,1,1,"","","","","",null,null,null,"");
    this._LogInService.logIn(this.userToLogIn).subscribe(
      data => this.response = data, error => this.errorMessage = <any> error
      , ()=> this.doSome(this.response));
      //() => console.log("Finished"  + this.response));
  }
  doSome(data:any)
  {
    console.log('usao sam');
     console.log(this.response[0].cardNumber);
    if(this.response[0].userTypeId == 1) {
      // console.log(this.response);
        this._LogInService.setUserLoggedIn();
        this.router.navigate(['service']);
      }
       else{
         this._LogInService.setUserLoggedIn();
      this.router.navigate(['/profile', this.response[0].cardNumber ]);


    }
  }

}
