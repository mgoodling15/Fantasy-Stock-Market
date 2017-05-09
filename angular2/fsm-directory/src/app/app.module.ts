//file that maintains app modules and imports

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routing } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeagueViewComponent } from './league-view/league-view.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { BuySellViewComponent } from './buy-sell-view/buy-sell-view.component';
import { FilterPipe } from './filter.pipe';
import { DataService } from './data.service';
import { LeagueFormComponent } from './league-form/league-form.component';
import { BuyConfirmComponent } from './buy-confirm/buy-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeagueViewComponent,
    LoginFormComponent,
    PlayerViewComponent,
    BuySellViewComponent,
    FilterPipe,
    LeagueFormComponent,
    BuyConfirmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
