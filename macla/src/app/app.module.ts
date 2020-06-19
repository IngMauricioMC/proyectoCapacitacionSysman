import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServiciosmaclaComponent } from './components/serviciosmacla/serviciosmacla.component';
import { TrabajosmaclaComponent } from './components/trabajosmacla/trabajosmacla.component';
import { ContactomaclaComponent } from './components/contactomacla/contactomacla.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ApiService } from './services/baseDatos/api.service';
import { AuthService } from './services/autenticacion/auth.service';
import { RegistroTrabajosComponent } from './components/registro-trabajos/registro-trabajos.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiciosmaclaComponent,
    TrabajosmaclaComponent,
    ContactomaclaComponent,
    RegistroComponent,
    NosotrosComponent,
    RegistroTrabajosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
