import { Routes, RouterModule } from '@angular/router';
import { LeagueViewComponent } from "./league-view/league-view.component";
import { HomeComponent } from "./home/home.component";
import { PlayerViewComponent } from "./player-view/player-view.component";

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
  }
];
export const Routing = RouterModule.forRoot(routes);
