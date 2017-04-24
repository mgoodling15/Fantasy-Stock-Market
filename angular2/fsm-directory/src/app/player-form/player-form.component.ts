//file for implementation of player form component 

import { Component, OnInit } from '@angular/core';
import { Player }    from '../player';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'player-form',
  templateUrl: './player-form.component.html',
  providers: [DataService]
})

export class PlayerFormComponent implements OnInit {
  errorMessage: string;
  mode = 'Observable';
  submitted = false;
  model = new Player("Email", "Username", "Password", "Bio");

  constructor (private dataService: DataService) {}
  ngOnInit() { }

  onSubmit(){
    this.submitted = true;
  }

  fbCreatePlayer(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
    });
  }

  fbPostPlayer(username, email, password, bio){
  var user = firebase.auth().currentUser;
  var uid = user.uid;
  firebase.database().ref('players/' + uid).set({username: username, email: email,
    password: password, bio: bio
    });
  }
}
