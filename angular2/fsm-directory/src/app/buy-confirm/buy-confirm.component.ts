import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-confirm',
  templateUrl: './buy-confirm.component.html',
  styleUrls: ['./buy-confirm.component.css']
})
export class BuyConfirmComponent implements OnInit, OnDestroy {
  public name;
  public value;
  private sub: any;
  
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
     this.sub = this.route.queryParams.subscribe(params => {
            
            this.name = params['name'];
            this.value = +params['value'];
     });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
