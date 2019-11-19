import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera-nav-perfil',
  templateUrl: './cabecera-nav-perfil.component.html',
  styleUrls: ['./cabecera-nav-perfil.component.css']
})
export class CabeceraNavPerfilComponent implements OnInit {

  constructor(private router: Router) { }

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

  ngOnInit() {
  }

}
