import { Component } from '@angular/core';
import { SignupAction } from './signup.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private signupAction: SignupAction) {}
  
  public async onSignup() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    return await this.signupAction.signup(username, password, email)
  }
}
