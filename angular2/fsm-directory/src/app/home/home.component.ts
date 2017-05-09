//file for implementation of home page component

import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Http } from '@angular/http';
import { LoginFormComponent} from '../login-form/login-form.component';
import { LeagueFormComponent } from '../league-form/league-form.component';
declare var firebase: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the Fantasy Stock Market";
  isSignedIn = false;

  constructor(private http: Http) {
  }

  ngOnInit() {
    var user = firebase.auth().currentUser;
    firebase.database().ref().on('value',snapshot => {
      if (user != null){
        this.isSignedIn = true;
      }
   })
  }

  ngOnChanges(){
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      this.isSignedIn = true;
      console.log("changed signed in");
    }
    });
  }

  onSignOut(){
    console.log("signed out");
  }

  fbSignOut(){
    firebase.auth().signOut().then(function() {
      console.log("success");
      this.onSignOut();
    }).catch(function(error) {
    // An error happened.
    });
  }

}
