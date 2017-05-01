//file for implementation of login form component

import { Component } from '@angular/core';
import { Player }    from '../player';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  providers: [DataService]
})
export class LoginFormComponent {
  errorMessage: string;
  mode = 'Observable';
  submitted = false;
  model = new Player("Email", "Username", "Password", "Bio");
  loggedIn = false;
  isSignedIn = false;
  submitted1 = false;
  model1 = new Player("Email", "Username", "Password", "Bio");

  constructor (private dataService: DataService) {}
  ngOnInit() { }

  onSubmit() {
    this.submitted = true;
    var user = firebase.auth().currentUser;
    if (user != null){
      this.isSignedIn = true;
    }
  }

  onSubmit1() {
    this.submitted1 = true;
    var user = firebase.auth().currentUser;
    if (user != null){
      this.isSignedIn = true;
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
    });
  }

  fbCreatePlayer(email, username, password, bio){
    return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    if (error) {
      alert("Invalid info for create account.")
      console.log('Login Failed!', error);
    } else {
      this.isSignedIn = true;
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
        password: password, bio: bio
      });
    });
  }

}
