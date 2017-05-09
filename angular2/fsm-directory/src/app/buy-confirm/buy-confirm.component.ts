import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
declare var firebase: any;

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
     var quan = this.purchase.value.quantity;
     var user = firebase.auth().currentUser;
     var uid = user.uid;
     var currentQuan;
     var ref = firebase.database().ref('players/' + uid + '/stocks/' +  this.name + '/');
     ref.on("value", (snapshot) => {
        currentQuan = snapshot.val();
     });
     if (currentQuan == null){
        currentQuan = 0;
     }
     
     firebase.database().ref('players/' + uid + '/stocks/' +  this.name + '/').set(parseInt(quan) + parseInt(currentQuan));
     //firebase.database().ref('players/' + uid + '/stock/').set(quan);
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
