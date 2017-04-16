import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-sell-view',
  templateUrl: './buy-sell-view.component.html',
  styleUrls: ['./buy-sell-view.component.css'],
  providers: []
})
export class BuySellViewComponent implements OnInit {

  stocks = [
    {
      "name": "Amazon",
      "value": 123456
    },
    {
      "name": "Microsoft",
      "value": 747383
    },
    {
      "name": "Exxon",
      "value": 970442
    },
    {
      "name": "Panera",
      "value": 2554373
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
