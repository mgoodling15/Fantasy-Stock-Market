import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-league-view',
  templateUrl: './league-view.component.html',
  styleUrls: ['./league-view.component.css'],
  providers: [DataService]
})
export class LeagueViewComponent implements OnInit {
  league: string;
  player: string;

  players = []

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.league = route.snapshot.params['league'];
   }

   ngOnInit() {
      this.fbGetData();
   }

   fbGetData() {
    firebase.database().ref('/players').on('child_added', (snapshot) => {
      this.players.push(snapshot.val())
    })
  }
}
