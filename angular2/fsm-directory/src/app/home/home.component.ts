import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { LoginFormComponent} from '../login-form/login-form.component';
import { PlayerFormComponent} from '../player-form/player-form.component';
import { Player } from '../player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the Fantasy Stock Market";
  @Input() player;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }

  constructor(private http: Http) {}

  ngOnInit() {
  }

}
