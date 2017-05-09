//file for implementation of player view component
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { LoginFormComponent } from '../login-form/login-form.component';
declare var firebase: any;

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css'],
  providers: [DataService],
  //template: '<li *ngFor ="#item of items">{{item.val}}</li>'
})

export class PlayerViewComponent implements OnInit {
  //classes = {'blue': false, 'red': true, 'underline': false};
  player: string;
  items =[];
  username = "";
  email = "";
  bio = "";
  cash = 0;


  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.player = route.snapshot.params['player'];

   }

   getInfo(userId){

     var ref = firebase.database().ref('/players/' + userId);
     ref.on("value", (snapShot) =>  {
       this.username = snapShot.val().username;
       this.email = snapShot.val().email;
       this.bio = snapShot.val().bio;
       this.cash = snapShot.val().cash;
     });
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
