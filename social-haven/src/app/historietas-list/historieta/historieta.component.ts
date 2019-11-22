import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Messages } from 'src/app/domain/messages.model';
import { User } from 'src/app/domain/user.model';
import { HistorietasListService } from '../historietas-list.service';
import { UsersService } from 'src/app/usuarios/users.service';

@Component({
  selector: 'app-historieta',
  templateUrl: './historieta.component.html',
  styleUrls: ['./historieta.component.css']
})
export class HistorietaComponent implements OnInit {

  @Input() message: Messages;
  @Input() user: User;

  messagesList: Messages[];

  //??
  // messagesList: Messages[];
              //Herre
  constructor(private userService: UsersService, private historietaService: HistorietasListService) { }


  //GET
  getMessageList() {
  this.historietaService.getMessageList()
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
