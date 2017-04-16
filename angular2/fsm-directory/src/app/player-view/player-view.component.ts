import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css'],
  providers: [DataService]
})
export class PlayerViewComponent implements OnInit {
  classes = {'blue': false, 'red': true, 'underline': false};
  player: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.player = route.snapshot.params['player'];
   }

   players = []

  ngOnInit() {

  }

}
