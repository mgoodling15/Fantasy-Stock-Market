//file for implementation of league form component

import { Component, OnInit } from '@angular/core';
import { League }from '../league';
import { Player } from '../player';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'league-form',
  templateUrl: './league-form.component.html',
  providers: [DataService]
})

export class LeagueFormComponent implements OnInit {
  errorMessage: string;
  mode = 'Observable';
  submitted = false;
  player = new Player("player@email.com", "usrnme", "pswrd", "bio", 0);
  model = new League("League Name", [this.player], 12345, 12345);

  constructor (private dataService: DataService) {}
  ngOnInit() { }

  onSubmit(email){
    this.submitted = true;
  }

  fbPostLeague(leaguename) {
    var date = new Date();
    firebase.database().ref('leagues/' + leaguename).set({players: "none", date: date.toDateString()
    });
  }
}
