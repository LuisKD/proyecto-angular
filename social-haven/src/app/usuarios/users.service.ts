import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs';
import { User } from '../domain/user.model';

const URL_BASE = 'http://localhost:3000/user';

//POST, PUT
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class UsersService {

    constructor(private http: HttpClient) { }

    //GET
    getUserList() {
        return this.http.get(URL_BASE);
    }

    getUserById(id: string) {
        return this.http.get(`${URL_BASE}/${id}`);
    }

    //POST
    addUser(user: User): Observable<User> {
        return this.http.post<User>(URL_BASE, user, httpOptions);
    }

    //PUT
    updateUser(user: User): Observable<User> {
        const url = `${URL_BASE}/${user.id}`;
        return this.http.put<User>(url, user, httpOptions);
    }
}