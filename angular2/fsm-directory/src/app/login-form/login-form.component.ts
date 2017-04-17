import { Component } from '@angular/core';
import { Player }    from '../player';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  model = new Player("Email", "Username", "Password", "Bio");

  submitted = false;

  onSubmit() { this.submitted = true; }

}
