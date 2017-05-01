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
  username1: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.player = route.snapshot.params['player'];
   }

   getInfo(userId){
     return firebase.database().ref('/players/' + userId).once('value').then(function(snapshot) {
       var username = snapshot.val().username;
       var email = snapshot.val().email;
       var bio = snapshot.val().bio;
       console.log(username);
       console.log(email);
       console.log(bio);
     }).catch(function(err){
       console.log("Error", err.code);
     }
   );
   }

  ngOnInit() {
    var userId = firebase.auth().currentUser.uid;
    if (userId != null){
        this.getInfo(userId);
    }else{
      console.log("not logged in");
    }
  }
}
