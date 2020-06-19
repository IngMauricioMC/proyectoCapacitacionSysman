import { Injectable, EventEmitter, OnInit } from '@angular/core';

import { ApiService } from '../baseDatos/api.service';
import { IUsuario } from '../../classmodels/interfaces/iusuario';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  usuarios: IUsuario[];
  usuarioActual: IUsuario;
  logged$ = new EventEmitter();

  constructor(private apiService: ApiService) {
    this.getUsuarios();
  }

  getUsuarios(){
    this.apiService.get('usuariosMacla').subscribe(data => {
      this.usuarios= data['usuarios'];
    });
  }

  logout(){
    this.logged$.emit({usuario:0, logged:false});
  }

  islogged$(id: number){
    this.logged$.emit({usuario:id, logged:true});
  }

  nuevoUsuario(user: IUsuario){
    this.apiService.post('nuevoUsuario', user).subscribe(data => {
      alert(data['msg']);
      this.getUsuarios();
    }, error => {
      alert(error);
    });
  }

  login(usuario, metodo?: () => any){
    let usuarioBD = this.usuarios.filter(usuarioArray => (usuarioArray.nomUsuario == usuario.nomUsuario && usuarioArray.contrasena == usuario.contrasena))[0];
    if(usuarioBD != null){
      this.usuarioActual = usuarioBD;
      this.islogged$(this.usuarioActual.id);
      alert("Bienvenido "+this.usuarioActual.nombre+"...");
      if(!isNull(metodo)){
        metodo();
      }
    }else{
      alert("Usuario o contraseña erróneos...");
      this.logout();
    }
  }
}
