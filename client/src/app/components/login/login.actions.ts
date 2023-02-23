import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/misc/config.actions';

@Injectable()
export class LoginAction {
    private API = API
    constructor(private http: HttpClient) {}

    public login(username: string, password: string) {
        const body = { username, password };
        return this.http.post(`${this.API}/login`, body);
    }     
}
