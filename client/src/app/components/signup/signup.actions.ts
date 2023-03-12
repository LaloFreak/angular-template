import axios from 'axios'
import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';
import { API } from 'src/misc/config.actions';

@Injectable()
export class SignupAction {
    private API = API

    public async signup(username: string, password: string, email: string) {
        const hashedPassword = CryptoJS.SHA256(password).toString();
        const body = {username, password: hashedPassword, email};
        return await axios.post(`${this.API}/signup`, body);
    }
}
