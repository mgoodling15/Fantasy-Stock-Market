import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeagueViewComponent } from './league-view/league-view.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { Routing } from './app.routes';
import { BuySellViewComponent } from './buy-sell-view/buy-sell-view.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeagueViewComponent,
    PlayerFormComponent,
    LoginFormComponent,
    PlayerViewComponent,
    BuySellViewComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
