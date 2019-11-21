import { Component, OnInit, Input } from '@angular/core';
import { Messages } from 'src/app/domain/messages.model';
import { User } from 'src/app/domain/user.model';
import { HistorietasListService } from '../historietas-list.service';
import { UserLoggedService } from 'src/app/cabecera-nav-perfil/user-logged.service';
import { UsersService } from 'src/app/usuarios/users.service';

@Component({
  selector: 'app-historieta',
  templateUrl: './historieta.component.html',
  styleUrls: ['./historieta.component.css']
})
export class HistorietaComponent implements OnInit {

  @Input() message: Messages;

  user: User;

  //??
  messagesList: Messages[];
              //Herre
  constructor(private userService: UsersService, private serviceHistorietas: HistorietasListService) { }

//
//GET
getMessageList() {
  this.serviceHistorietas.getMessageList()
  .subscribe( (data: Messages[]) => this.messagesList = data, //ok
              error => console.error(error),          //error
              () => console.log('Item list ha cargado') //final (por defecto)
  )
  };


  ngOnInit() {
    //Herre
    // this.userService.getUserById(this.message.usersId).subscribe(
    //   (data: User) => this.user = data
    // )

    this.getMessageList();

  }

}
