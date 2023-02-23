import { Component } from '@angular/core';
import { LoginAction } from './login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginAction: LoginAction) {}
  
  public onLogin() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    this.loginAction.login(username, password).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
  
}
