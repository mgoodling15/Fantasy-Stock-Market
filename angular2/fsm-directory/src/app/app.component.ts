//component file for the root component

import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { DataService } from './data.service';
declare var firebase: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fantasy Stock Market';
  isSignedIn = false;

constructor (private dataService: DataService) {}

ngOnInit(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    this.isSignedIn = true;
    console.log(this.isSignedIn);
  }
});

}

}
