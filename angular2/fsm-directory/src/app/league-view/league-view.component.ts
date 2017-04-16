import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league-view',
  templateUrl: './league-view.component.html',
  styleUrls: ['./league-view.component.css']
})
export class LeagueViewComponent implements OnInit {
  league: string;
  player: string;

  players = [
    {"username": "Megan", "password": "asdfasdf"},
    {"username": "Riley", "password": "qwerqwer"},
    {"username": "Ripple", "password": "nbnbnbn"},
  ]

  constructor(private route: ActivatedRoute) {
    this.league = route.snapshot.params['league'];
   }

  ngOnInit() {
  }

}
