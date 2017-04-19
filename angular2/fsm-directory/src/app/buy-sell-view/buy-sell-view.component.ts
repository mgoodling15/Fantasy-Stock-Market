import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
//import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-buy-sell-view',
  templateUrl: './buy-sell-view.component.html',
  styleUrls: ['./buy-sell-view.component.css'],
  providers: []
})
export class BuySellViewComponent implements OnInit {
 public stockLst;
 constructor(private http: Http) {}
 
  stocks = [];

  ngOnInit() {
     
     this.getStocks();
     
     //this.fillStocks();
  }

  getStocks() {
    this.http.get('http://localhost:4000/api/stock')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.fillStocks(JSON.parse(data));},
        err => console.error(err),
        () => console.log('done')
      );
     
     
  }
  fillStocks(data){
   for (var i = 0; i < 4; i++){
       this.stocks.push({"name": data[i].Name, "value": data[i].Price}); 
   }
  }

}
