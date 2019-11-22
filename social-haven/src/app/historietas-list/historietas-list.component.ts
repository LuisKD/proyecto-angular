import { Component, OnInit } from '@angular/core';
import { Messages } from '../domain/messages.model';
import { UserLoggedService } from '../cabecera-nav-perfil/user-logged.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HistorietasListService } from './historietas-list.service';
import { User } from '../domain/user.model';

@Component({
  selector: 'app-historietas-list',
  templateUrl: './historietas-list.component.html',
  styleUrls: ['./historietas-list.component.css']
})
export class HistorietasListComponent implements OnInit {

  messagesList: Messages[];

  users: User;

  constructor(private serviceHistorietas: HistorietasListService, private serviceUser: UserLoggedService) { }

  //GET
  getMessageList() {
  this.serviceHistorietas.getMessageList()
  .subscribe( (data: Messages[]) => this.messagesList = data, //ok
              error => console.error(error),          //error
              () => console.log('messagesList ha cargado') //final (por defecto)
  )
  };

  //POST
  addMessage(message: Messages) {
  this.serviceHistorietas.addMessage(message)
    .subscribe(message => this.messagesList.push(message));
  }

  ngOnInit() {
    this.getMessageList();
  }

}
