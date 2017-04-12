import { Component } from '@angular/core';

import { Player }    from './player';

@Component({
  selector: 'player-form',
  templateUrl: './player-form.component.html'
})
export class PlayerFormComponent {

  model = new Player(0, "Email", "Username", "Password", "Bio", 100000);

  submitted = false;

  onSubmit() {

    this.submitted = true;
    

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
