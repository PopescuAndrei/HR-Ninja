import { ANONYMOUS_USER } from './../util/constants';
import { EducationTimelineComponent } from './../candidates/education-timeline/education-timeline.component';
import { RouterUtils } from './../util/router.utils';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from '../domain/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Injectable()
export class AuthService {

  private headers: Headers; 
  private options: RequestOptions;
  authenticatedStatus: Subject<boolean> = new Subject<boolean>();

  constructor(private http: Http) {
      this.headers = new Headers({ 'Content-Type': 'application/json' });
      this.options = new RequestOptions({ headers: this.headers });
  }

  login(email: string, password: string): Observable<User> {
    return this.http
          .post(RouterUtils.authUrl(), {email: email, password:password}, this.options)
          .map(
            (res: Response) => {
              localStorage.setItem('currentUser', JSON.stringify(<User> res.json()));
              localStorage.setItem('authenticated', JSON.stringify(true));
              this.authenticatedStatus.next(true);
              return <User> res.json();
            }, error => {
              localStorage.clear();
              localStorage.setItem('authenticated', JSON.stringify(false));
              this.authenticatedStatus.next(false);
              return null;
            });
  }


  logout() {
    //remove user from local storage to log user out
    localStorage.clear();
    localStorage.clear();
    localStorage.setItem('authenticated', JSON.stringify(false));
    this.authenticatedStatus.next(false);
  }

  watchAuthenticatedStatus(): Observable<any> {
    return this.authenticatedStatus.asObservable();
  }
}
