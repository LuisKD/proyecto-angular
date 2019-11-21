import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs';

//POST, PUT
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

const URL_BASE = 'http://localhost:3000/user/1';

@Injectable()
export class UserLoggedService {

    constructor(private http: HttpClient) { }

    //GET
    getUsersList() {
        return this.http.get(URL_BASE);
    }


    //GET
    getUserById() {
        return this.http.get(`${URL_BASE}`);
    }
    
}
