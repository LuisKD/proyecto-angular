import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Messages } from '../domain/messages.model';
import { Observable } from 'rxjs';

const URL_BASE = 'http://localhost:3000/messages';

const URL_BASE_MISHISTORIETAS = 'http://localhost:3000/messages?usersId=1';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class HistorietasListService {

    constructor(private http: HttpClient) { }

    //GET
    getMessageList() {
        return this.http.get(URL_BASE);
    }

    //GET
    getMisHistorietas() {
        return this.http.get(URL_BASE_MISHISTORIETAS);
    }

    //GET by ID
    getMessageById(id: string) {
        return this.http.get(`${URL_BASE}/${id}`);
    }

    //POST
    sendMessage(message: Messages): Observable<Messages> {
        return this.http.post<Messages>(URL_BASE, message, httpOptions);
    }
}
