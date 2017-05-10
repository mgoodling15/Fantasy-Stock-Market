//file for implementation of player view component
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { LoginFormComponent } from '../login-form/login-form.component';
import { Http, Response } from '@angular/http';
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
  portfolio = 0;
  stocksOwned = [];
  stocks = [];

  constructor(private route: ActivatedRoute, private dataService: DataService,
  private http: Http) {
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

     this.getStocks();
     this.fillStocksOwned(userId);
   }

   fillStocksOwned(userId){
     var ref = firebase.database().ref('/players/' + userId + '/stocks/');
     ref.on("value", (snapShot) =>  {
       snapShot.forEach(snapShot => {
         var key = snapShot.getKey();
         var amount = snapShot.val();
         this.stocksOwned.push({key: key, amount: amount});
         console.log(snapShot.getKey());
         console.log(snapShot.val());
       })
     });
     this.getValues();
   }

   getValues(){
     console.log(this.stocksOwned);
     console.log(this.stocks);
     console.log("here");

     for (var i = 0; i < this.stocksOwned.length; i++){
       console.log(this.stocksOwned[i].getKey());
       for (var stock of this.stocks){
         console.log("hi");
         console.log(stock.name);
       }
      }
    }


  ngOnInit() {
    var userId = firebase.auth().currentUser.uid;
    if (userId != null){
        this.getInfo(userId);

    }else{
      console.log("not logged in");
    }

  }

  getStocks() {
    //makes http requests to server to get stock info
    this.http.get('http://localhost:4000/api/stock')
      .map((res:Response) => res.json())
      .subscribe(
        data => {  this.fillStocks(JSON.parse(data));},
        err => console.error(err),
        () => console.log('done')
      );
  }

  fillStocks(data){
   //fills stock objects with stock data by parsing through json
   for (var i = 0; i < data.length; i++){
       if (typeof data[i].Name != 'undefined'){
           this.stocks.push({name: data[i].Name, value: data[i].Price});
        }
        else {  }
    }
 }
}
