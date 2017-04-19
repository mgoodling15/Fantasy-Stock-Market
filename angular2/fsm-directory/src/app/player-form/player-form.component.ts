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
  players: Player[];
  mode = 'Observable';
  submitted = false;
  model = new Player("Email", "Username", "Password", "Bio");

  email: "";
  username: "";
  password: "";
  bio: ""

  constructor (private dataService: DataService) {}
  ngOnInit() { }
  // getPlayers() {
  //   this.dataService.getPlayers()
  //                    .subscribe(
  //                      players => this.players = players,
  //                      error =>  this.errorMessage = <any>error);
  // }
  // addPlayer(name: string) {
  //   if (!name) { return; }
  //   this.dataService.addPlayer(name)
  //                    .subscribe(
  //                      hero  => this.players.push(player),
  //                      error =>  this.errorMessage = <any>error);
  // }
  fbPostPlayer(email, username, password, bio) {
    this.submitted = true;
    var newPlayer = new Player(email, username, password, bio);
    firebase.database().ref('/players').push({username: {email: email, username: username,
      password: password, bio: bio}});
  }
}
