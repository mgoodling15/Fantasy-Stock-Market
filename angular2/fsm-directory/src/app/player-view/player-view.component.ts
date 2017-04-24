//file for implementation of player view component 

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { LoginFormComponent } from '../login-form/login-form.component';
declare var firebase: any;

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css'],
  providers: [DataService]
})
export class PlayerViewComponent implements OnInit {
  //classes = {'blue': false, 'red': true, 'underline': false};
  player: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.player = route.snapshot.params['player'];
   }

   players = []

  ngOnInit() {
    var username, email, uid;

    var user = firebase.auth().currentUser;

    if (user != null) {
      uid = user.uid;
    }

  firebase.database().ref('/players/' + uid).once('value').then(function(snapshot) {
  //var username = snapshot.val().username;
  //console.log(snapshot);

});

  }

}
