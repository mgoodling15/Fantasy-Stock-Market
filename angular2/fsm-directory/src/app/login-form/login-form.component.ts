//file for implementation of login form component

import { Component, OnInit } from '@angular/core';
import { Player }    from '../player';
import { DataService } from '../data.service';
import {Router } from '@angular/router';
declare var firebase: any;

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  providers: [DataService]
})
export class LoginFormComponent implements OnInit {
  errorMessage: string;
  mode = 'Observable';
  submitted = false;
  model = new Player("Email", "Username", "Password", "Bio", 0);
  loggedIn = false;
  isSignedIn = false;
  submitted1 = false;
  model1 = new Player("Email", "Username", "Password", "Bio", 0);
  public state = 'home';
  constructor (private dataService: DataService, private router : Router) {}
  ngOnInit() {

   }

  onSubmit() {
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      this.isSignedIn = true;
      this.state = 'created';
      console.log(this.state);
    }

  });
  }

  onSubmit1() {
    this.submitted1 = true;
    var user = firebase.auth().currentUser;
    if (user != null){
      this.isSignedIn = true;
      this.state = 'created';
      //this.router.navigate(['player-view']);
    }
  }

  fbSignIn(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      if(error){
        alert("Invalid username or passord.");
        var errorCode = error.code;
        var errorMessage = error.message;
      }
     else { this.state = 'logged' }
    });
     // this.router.navigate(['player-view']);
  }

  fbCreatePlayer(email, username, password, bio){
    return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    if (error) {
      alert("Invalid info for create account.")
      console.log('Login Failed!', error);
    } else {
      this.isSignedIn = true;
      this.state = 'created';
      console.log('Authenticated successfully');
    }
      var errorCode = error.code;
      var errorMessage = error.message;
    })

  }

  fbPostPlayer(email, username, password, bio){
    this.fbCreatePlayer(email, username, password, bio).then(function(value){
      firebase.auth().signInWithEmailAndPassword(email, password);
      var user = firebase.auth().currentUser;
      var uid = user.uid;
      firebase.database().ref('players/' + uid).set({username: username, email: email,
        password: password, bio: bio, cash: 100000
      });
    });
    //this.router.navigate(['player-view']);
  }

}
