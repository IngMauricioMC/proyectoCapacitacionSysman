import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { TrabajosmaclaComponent } from './components/trabajosmacla/trabajosmacla.component';
import { ContactomaclaComponent } from './components/contactomacla/contactomacla.component';
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { ServiciosmaclaComponent } from "./components/serviciosmacla/serviciosmacla.component";
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroTrabajosComponent } from './components/registro-trabajos/registro-trabajos.component';


const routes: Route[] = [
  {path: '', component: NosotrosComponent},
  {path: 'login/registro', component: RegistroComponent},
  {path: 'servicios', component: ServiciosmaclaComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactomaclaComponent},
  {path: 'mistrabajos'+'/:id', component: TrabajosmaclaComponent},
  {path: 'registroTrabajos', component: RegistroTrabajosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
