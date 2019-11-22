import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';
import { MisCosasComponent } from './mis-cosas/mis-cosas.component';
import { MisColegasComponent } from './mis-colegas/mis-colegas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventosComponent } from './eventos/eventos.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // Equivale a: {path: '', component: ItemComponent} --> http://localhost:4200/
  {path: 'home', component: MisHistorietasComponent}, // http://localhost:4200/home
  {path: 'mis-historietas', component: MisHistorietasComponent},
  {path: 'mis-cosas', component: MisCosasComponent},
  {path: 'mis-colegas', component: MisColegasComponent},
  {path: 'eventos', component: EventosComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);