import { Component, OnInit } from '@angular/core';
import { Messages } from '../domain/messages.model';
import { HistorietasListService } from '../historietas-list/historietas-list.service';
import { UserLoggedService } from '../cabecera-nav-perfil/user-logged.service';


@Component({
  selector: 'app-mis-historietas',
  templateUrl: './mis-historietas.component.html',
  styleUrls: ['./mis-historietas.component.css']
})


export class MisHistorietasComponent implements OnInit {
  
  messagesList: Messages[];

  constructor(private serviceHistorietas: HistorietasListService, private serviceUser: UserLoggedService) { }

  getMessageList() {
    this.serviceHistorietas.getMessageList()
    .subscribe( (data: Messages[]) => this.messagesList = data, //ok
                error => console.error(error),          //error
                () => console.log('messagesList ha cargado') //final (por defecto)
    )
    };


  ngOnInit() {
    this.getMessageList();
  }

}
