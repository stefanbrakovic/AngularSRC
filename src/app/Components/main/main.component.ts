import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LogInService} from "../../Services/log-in.service";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router:Router, private _LogInService: LogInService) { }

  ngOnInit() {
  }
}

