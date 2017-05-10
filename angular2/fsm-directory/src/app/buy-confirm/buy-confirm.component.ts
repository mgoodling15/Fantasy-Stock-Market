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
  public cash: number;
  public newCash: number;
  private sub: any;
  public uid;
  public cost;
  public quan;
  public state = 'input';
  public purchase = this.fb.group({
    quantity: ["",Validators.required]
  });

  buy() {
     //console.log(event);
     this.quan = this.purchase.value.quantity;
    
     var currentQuan;
     var ref = firebase.database().ref('players/' + this.uid + '/stocks/' +  this.name + '/');
     ref.on("value", (snapshot) => {
        currentQuan = snapshot.val();
     });
     if (currentQuan == null){
        currentQuan = 0;
     }
     this.cost = Math.round(Number(this.quan * this.value) * 100) / 100;
    
     if (Number(this.cost) < Number(this.cash)) {
         firebase.database().ref('players/' + this.uid + '/stocks/' +  this.name + '/').set(parseInt(this.quan) + parseInt(currentQuan));
	 var costRef = firebase.database().ref('players/' + this.uid + '/cash/');
	 costRef.set(Number(this.cash) - Number(this.cost));
	 costRef.on('value',(snapshot) => {
            this.newCash = snapshot.val();
	 });
     
	 this.state = 'confirm';
     }
     else {
        
        this.state = 'deny';
     }
  }

  constructor(private route : ActivatedRoute, public fb: FormBuilder) { }

  ngOnInit() {
     this.sub = this.route.queryParams.subscribe(params => {
            
            this.name = params['name'];
            this.value = +params['value'];
     });
     var user = firebase.auth().currentUser;
     var uid = user.uid;
     var costRef = firebase.database().ref('players/' + uid + '/cash/');
     costRef.on('value',(snapshot) => {
        this.cash = snapshot.val();
     });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
