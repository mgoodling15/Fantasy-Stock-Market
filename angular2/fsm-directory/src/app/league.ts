//league class set-up file

import { Player } from './player';

export class League {
  public leaguename: string;
  public players: [Player];
  public startDate: number;
  public endDate: number;
  constructor(
    name: string,
    playersLst: [Player],
    start: number,
    end: number
  ) {
      this.leaguename = name
      this.players = playersLst;
      this.startDate = start;
      this.endDate = end;
    }
}
