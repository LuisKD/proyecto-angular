import { Component, OnInit } from '@angular/core';
import { UserLoggedService } from 'src/app/cabecera-nav-perfil/user-logged.service';
import { User } from 'src/app/domain/user.model';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  user: User;

  constructor(private service: UserLoggedService) { }

  //GET
  loadUserById() {
    this.service.getUserById()
    .subscribe( (data: User) => this.user = data, //ok
                error => console.error(error),          //error
                () => console.log('El usuario ha cargado') //final (por defecto)
    )
};


  ngOnInit() {
    this.loadUserById();
  }

}
