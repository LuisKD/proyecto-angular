import { Component, OnInit, Input } from '@angular/core';
import { Messages } from '../domain/messages.model';
import { UserLoggedService } from '../cabecera-nav-perfil/user-logged.service';
import { HistorietasListService } from './historietas-list.service';

@Component({
  selector: 'app-historietas-list',
  templateUrl: './historietas-list.component.html',
  styleUrls: ['./historietas-list.component.css']
})
export class HistorietasListComponent implements OnInit {

  @Input() messagesList: Messages[];

  constructor() { }

  ngOnInit() {
  }

}
