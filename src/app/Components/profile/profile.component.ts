import { Component, OnInit, Input } from '@angular/core';
import {User} from "../../Models/Users/User";
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {UserService} from "../../Services/user.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user: User;
  constructor(private route: ActivatedRoute, private usersService:UserService ) { }
  curentUser:User;
  errorMessage;
  card ;
  ngOnInit():void {
    this.curentUser = new User(-1,"","","","","",-1,-1,"","","","","",null,null,null,"");
    // this.route.params
    //   .switchMap((params: Params) => this.usersService.getUserByCardNumber(params['cardNumber']))
    // .subscribe(data => this.curentUser = data, error => this.errorMessage = <any> error
    //   , ()=> console.log("fsasas"+this.curentUser));
    this.route.params.subscribe((params: {cardNumber: string}) => {this.card = params.cardNumber
    });

    //console.log(this.card);

    this.usersService.getUserByCardNumber(this.card).subscribe(
      data => this.curentUser = data,
      error => this.errorMessage = <any> error,
      ()=> console.log(JSON.stringify(this.curentUser)));
  }

}
