import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {
  classes = {'blue': false, 'red': true, 'underline': false};
  player: string;

  constructor(private route: ActivatedRoute) {
    this.player = route.snapshot.params['player'];
   }

   players = [
     {"username": "Megan", "password": "asdfasdf"},
     {"username": "Riley", "password": "qwerqwer"},
     {"username": "Ripple", "password": "nbnbnbn"},
   ]

  ngOnInit() {
  }

}
