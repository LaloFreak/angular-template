import axios from 'axios'
import { Injectable } from '@angular/core';
import { API } from 'src/misc/config.actions';

@Injectable()
export class LoginAction {
    private API = API

    public async login(username: string, password: string) {
        const body = {username, password};
        return await axios.post(`${this.API}/login`, body);
    }     
}
