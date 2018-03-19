import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor(private http: Http, private router: Router) {

    }
    logout() {
        this.loggedIn.next(false);
        this.router.navigate(['/']);
        return this.deleteToken();
    }

    signup(username: string, email: string, password: string) {
        return this.http.post('http://el-backend.test/api/user',
            {name: username, email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
    }

    signin(email: string, password: string) {
        return this.http.post('http://el-backend.test/api/user/signin',
            {name: name, email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
                (response: Response) => {
                    const token = response.json().token;
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {token: token, decoded: JSON.parse(window.atob(base64))};
                }
            )
            .do(
                tokenData => {
                    localStorage.setItem('token', tokenData.token);
                    this.loggedIn.next(true);
                    this.router.navigate(['/']);
                }

            );
    }

    getToken () {
        return localStorage.getItem('token');
    }
    private tokenAvailable(): boolean {
        return !!localStorage.getItem('token');
    }
    deleteToken () {
        return localStorage.removeItem('token');
    }
}
