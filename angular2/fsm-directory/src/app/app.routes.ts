// file that contains routes for links

import { Routes, RouterModule } from '@angular/router';
import { LeagueViewComponent } from "./league-view/league-view.component";
import { HomeComponent } from "./home/home.component";
import { PlayerViewComponent } from "./player-view/player-view.component";
import { BuySellViewComponent } from "./buy-sell-view/buy-sell-view.component";
import { BuyConfirmComponent } from "./buy-confirm/buy-confirm.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'league-view',
    component: LeagueViewComponent
  },
  {
    path: 'player-view',
    //'player-view/:player',
    component: PlayerViewComponent
  },
  {
    path: 'buy-sell-view',
    component: BuySellViewComponent
  },
  {
    path: "buy-confirm",
    component: BuyConfirmComponent
  }
];
export const Routing = RouterModule.forRoot(routes);
