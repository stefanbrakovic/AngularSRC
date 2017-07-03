import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LogInService} from "./Services/log-in.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router, private _LogInService: LogInService){}

  ngOnInit() {
  }
}
