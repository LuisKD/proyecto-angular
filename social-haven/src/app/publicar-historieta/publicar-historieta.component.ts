import { Component, OnInit } from '@angular/core';
import { Messages } from '../domain/messages.model';
import { HistorietasListService } from '../historietas-list/historietas-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicar-historieta',
  templateUrl: './publicar-historieta.component.html',
  styleUrls: ['./publicar-historieta.component.css']
})
export class PublicarHistorietaComponent implements OnInit {

  messagesList: Messages[];

  newMessage:string;

  constructor(private historietaService: HistorietasListService, private router: Router) { }

  recargarAMain() {
    this.router.navigate(['/mis-historietas'])
  }

  //POST
  sendMessage() {

  let message = new Messages();
  let fechaHoy = new Date();
  let fechaHoyFormateada = (fechaHoy.getDate() + "-" + (fechaHoy.getMonth() +1) + "-" + fechaHoy.getFullYear());

  message.content=this.newMessage;
  message.publishDate=fechaHoyFormateada;
  message.usersId=1;
    
  this.historietaService.sendMessage(message)
  .subscribe(
    item => this.messagesList.push(message)
  )
}

  ngOnInit() {
  }

}
