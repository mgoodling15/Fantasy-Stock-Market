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

  onSubmit(email){
    this.submitted = true;
  }

  fbPostPlayer(email, username, password, bio) {
    firebase.database().ref('players/' + username).set({email: email,
      pasword: password, bio: bio
    });
  }
}
