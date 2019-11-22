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

  constructor( ) { }

  ngOnInit() {

  }

}
