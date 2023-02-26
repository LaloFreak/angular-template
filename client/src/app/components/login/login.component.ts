import { Component } from '@angular/core';
import { LoginAction } from './login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginAction: LoginAction) {}
  
  public async onLogin() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    return await this.loginAction.login(username, password)
  }
}
