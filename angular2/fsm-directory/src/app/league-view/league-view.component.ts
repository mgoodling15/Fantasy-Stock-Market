//file for implementation of league view page component

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { LeagueFormComponent } from '../league-form/league-form.component';
import { League } from '../league';
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
  model = new League("League Name",[null],12345,12345);
  leaguename = null;
  isInLeague = false;

  players = []



  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.league = route.snapshot.params['league'];
   }

  ngOnInit() {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    firebase.database().ref('/players/' + uid).on('value',snapshot => {
      this.leaguename = snapshot.child('league').val();
      if (this.leaguename != null){
        this.fbGetData(this.leaguename);
        this.isInLeague = true;
      }
   })
  }

  fbGetData(leaguename) {
     firebase.database().ref('/leagues/' + leaguename + '/players/').on
     ('value',snapshot => {
       snapshot.forEach(snapshot => {
         console.log(snapshot.val());
         function compare(a,b) {
           if (a.portfolio < b.portfolio){return -1}
           if (a.portfolio > b.portfolio){return 1}
          return 0;
        }

        this.players.push({username :snapshot.val().username, 
          portfolio: snapshot.val().portfolio});
          this.players.sort(compare);
       })
    })
  }

  joinLeague(leaguename){
    var user = firebase.auth().currentUser;
    var uid = user.uid;

    var email = "";
    var username = "";
    var portfolio = 0;

    firebase.database().ref('players/' + uid).once('value', snapshot => {
      username = snapshot.child('username').val();
      portfolio = snapshot.child('portfolio').val();
    });

    //find count or set to zero if doesnt exist
    firebase.database().ref('leagues/' + leaguename).once('value', snapshot => {
      var count = snapshot.child('count').val();
      if (count == null){
        count = 0;
        firebase.database().ref('leagues/' + leaguename + '/count/').set(count
        )
      }

      //check if player exists in league
      var exists = false;
      firebase.database().ref('leagues/' + leaguename + '/players/').once
      ('value', snapshot => {
        snapshot.forEach(function(child){
          if (child.val() == uid){
            exists = true;
            console.log("user already in league");
          }
        });
        if (exists == true){
          alert("You have already joined this league!");
        }

        //check if within amount of players allowed
        if ((count < 16) && (count >= 0) && (!(exists))){ //hard code 16
          count++;
          firebase.database().ref('leagues/' + leaguename + '/count/').set(count
          ).then(
          firebase.database().ref('leagues/' + leaguename).once('value', function(snapshot){
              firebase.database().ref('leagues/' + leaguename + '/players/' + count).set({uid: uid,
                username: username, portfolio: portfolio}
                );
            }).then(
              firebase.database().ref('players/' + uid + '/league/').set(leaguename)
            )
          );

        }if (count == 16){
          alert("There are already 16 players in this league - join another!");
          console.log("too many league members");
        }
    });
  });
  }

}
