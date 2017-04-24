//league class set-up file

import { Player } from './player';

export class League {
  constructor(
    public leaguename: string,
    public players: [Player],
    startDate: 12345,
    endDate: 12345
  ) {  }
}
