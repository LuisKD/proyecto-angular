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
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { MisColeguillasComponent } from './mis-coleguillas/mis-coleguillas.component';
import { UserLoggedComponent } from './cabecera-nav-perfil/user-logged/user-logged.component';



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
    UserLoggedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
