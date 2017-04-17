import { Component, OnInit } from '@angular/core';
import { Player }    from '../player';
import { DataService } from '../data.service';

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

  constructor (private dataService: DataService) {}
  ngOnInit() {}
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
  onSubmit() {

    this.submitted = true;


  }

}
