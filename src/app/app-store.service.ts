import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { User } from './domain/user';
import { Injectable } from '@angular/core';

@Injectable()
export class AppStoreService {
    private _loggedUser: BehaviorSubject<User>;

    private dataStore : {
        loggedInUser: User;
    }

    constructor(private http: Http) {
        let dummyUser = new User(0, "Andrei", "Popescu", "andrei.popescu93@gmail.com");
        this.dataStore = { loggedInUser:  dummyUser}
        this._loggedUser = <BehaviorSubject<User>> new BehaviorSubject(dummyUser);
    }

    getLoggedInUser(): Observable<User> {
        return this._loggedUser.asObservable();
    }

    afterLogin(user: User) {
        this.dataStore.loggedInUser = user;
    }

    afterLogout() {
        this.dataStore.loggedInUser = null;
    }
}