import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-confirm',
  templateUrl: './buy-confirm.component.html',
  styleUrls: ['./buy-confirm.component.css']
})



export class BuyConfirmComponent implements OnInit, OnDestroy {
  public name;
  public value;
  private sub: any;
  public purchase = this.fb.group({
    quantity: ["",Validators.required]
  });

  buy() {
     //console.log(event);
     console.log(this.purchase.value.quantity);
  }

  constructor(private route : ActivatedRoute, public fb: FormBuilder) { }

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
