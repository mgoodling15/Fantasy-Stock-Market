/*
Fantasy Stock League
buy-sell.component.ts
Alex Herron, Megan Goodling, Laila King
April 23rd
Added comments, added ability to read in more than one stock
Makes get request to server to get stock information and puts it in object
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-buy-sell-view',
  templateUrl: './buy-sell-view.component.html',
  styleUrls: ['./buy-sell-view.component.css'],
  providers: []
})
export class BuySellViewComponent implements OnInit {
 public stockLst;
 
 constructor(private http: Http) {}
  //list of stocks to display
  stocks = [];
  //on component initialization calls this function
  ngOnInit() {
     
     this.getStocks();
     
  }

  getStocks() {
    //makes http requests to server to get stock info
    this.http.get('http://localhost:4000/api/stock')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.fillStocks(JSON.parse(data));},
        err => console.error(err),
        () => console.log('done')
      );
     
     
  }
  fillStocks(data){
   //fills stock objects with stock data by parsing through json
   for (var i = 0; i < 4; i++){
       this.stocks.push({"name": data[i].Name, "value": data[i].Price}); 
   }
  }

}
