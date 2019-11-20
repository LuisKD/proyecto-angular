import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../domain/user.model';
import { UserLoggedService } from './user-logged.service';

@Component({
  selector: 'app-cabecera-nav-perfil',
  templateUrl: './cabecera-nav-perfil.component.html',
  styleUrls: ['./cabecera-nav-perfil.component.css']
})
export class CabeceraNavPerfilComponent implements OnInit {

  user: User;

  constructor(private service: UserLoggedService, private router: Router, private route: ActivatedRoute) { }

  irAMisHistorietas() {
    this.router.navigate(['/mis-historietas']);
  }

  irAMisCosas() {
    this.router.navigate(['/mis-cosas']);
  }

  irAMisColegas() {
    this.router.navigate(['/mis-colegas']);
  }

  Eventos() {
    this.router.navigate(['/eventos']);
  }

  //GET
  loadUserById() {
  this.route.params.subscribe(params => {
    const id = params.id as string;
    if (id != null) {

      this.service.getUserById(id)
      .subscribe( (data: User) => this.user = data, //ok
                  error => console.error(error),          //error
                  () => console.log('El usuario ha cargado') //final (por defecto)
      )

    }
  });
  };

  ngOnInit() {
    this.loadUserById();
  }

}
