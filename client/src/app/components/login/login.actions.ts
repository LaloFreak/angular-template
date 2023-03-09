import axios from 'axios'
import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';
import { API } from 'src/misc/config.actions';

@Injectable()
export class LoginAction {
    private API = API

    public async login(username: string, password: string) {
        const hashedPassword = CryptoJS.SHA256(password).toString();
        const body = {username, password: hashedPassword};
        return await axios.post(`${this.API}/login`, body);
    }
}
