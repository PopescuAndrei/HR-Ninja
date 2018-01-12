import { Language } from '../domain/language';

import { Observable } from 'rxjs/Rx';
import { RestMappings } from './../util/router.utils';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {
    
    private headers: Headers; 
    private options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAllLanguages(): Observable<Array<Language>> {
        return this.http
            .get(RestMappings.allLanguagesUrl())
            .map((res: Response) => <Array<Language>> res.json());
    }
}