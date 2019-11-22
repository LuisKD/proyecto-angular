import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';
import { MisCosasComponent } from './mis-cosas/mis-cosas.component';
import { MisColegasComponent } from './mis-colegas/mis-colegas.component';
import { EventosComponent } from './eventos/eventos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { FormsModule } from '@angular/forms';
import { CabeceraNavPerfilComponent } from './cabecera-nav-perfil/cabecera-nav-perfil.component';
import { PublicarHistorietaComponent } from './publicar-historieta/publicar-historieta.component';
import { HistorietasListComponent } from './historietas-list/historietas-list.component';
import { CopyrightComponent } from './copyright/copyright.component';

import { HttpClientModule } from '@angular/common/http';
import { MisColeguillasComponent } from './mis-coleguillas/mis-coleguillas.component';
import { UserLoggedService } from './cabecera-nav-perfil/user-logged.service';
import { HistorietaComponent } from './historietas-list/historieta/historieta.component';
import { HistorietasListService } from './historietas-list/historietas-list.service';
import { UsersService } from './usuarios/users.service';
import { SoloMisHistorietasComponent } from './mis-cosas/solo-mis-historietas/solo-mis-historietas.component';
import { DatosPersonalesComponent } from './mis-cosas/datos-personales/datos-personales.component';



@NgModule({
  declarations: [
    AppComponent,
    MisHistorietasComponent,
    MisCosasComponent,
    MisColegasComponent,
    EventosComponent,
    PageNotFoundComponent,
    CabeceraNavPerfilComponent,
    PublicarHistorietaComponent,
    HistorietasListComponent,
    CopyrightComponent,
    DatosPersonalesComponent,
    MisColeguillasComponent,
    HistorietaComponent,
    SoloMisHistorietasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [UserLoggedService, HistorietasListService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
