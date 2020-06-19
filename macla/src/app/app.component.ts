import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from "./services/autenticacion/auth.service";
import { IUsuario } from './classmodels/interfaces/iusuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  login: any = {usuario:0, logged:false};
  title = 'macla';
  usuarioForm: IUsuario = {id: 0, nombre: "", telefono: "", email: "", direccion: "", nomUsuario: "", contrasena: "", id_ciudad: 0};
  ciudad: string = "";
  formLogin : boolean = false;

  constructor(public authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router){
  }

  ngOnInit() {
    this.authService.logged$.subscribe(logged => {
      this.login = logged;
    });
  }

  loginFormulario(){
    this.formLogin = true;
  }

  cerrarLogin(){
    this.formLogin = false;
  }

  registro(){
    this.formLogin = false;
    this.router.navigate(['login/registro']);
  }

  cerrarSesion(){
    this.authService.logout();
    this.router.navigate(['nosotros']);
  }

  validarDatos(){
    this.authService.login(this.usuarioForm, () => {
      let ruta: string;
      if (this.authService.usuarioActual.nomUsuario == 'admin') {
        ruta = 'registroTrabajos';
      }else{
        ruta = 'mistrabajos/'+this.authService.usuarioActual.id;
      }
      this.router.navigate([ruta]);
    });
    this.cerrarLogin();
  }
}
