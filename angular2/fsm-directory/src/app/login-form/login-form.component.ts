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

  constructor (private dataService: DataService) {}
  ngOnInit() { }

  onSubmit() { this.submitted = true; }

  fbSignIn(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

    });

  }
}
