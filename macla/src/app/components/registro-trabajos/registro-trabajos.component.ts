import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUsuario } from 'src/app/classmodels/interfaces/iusuario';
import { ApiService } from 'src/app/services/baseDatos/api.service';
import { AuthService } from 'src/app/services/autenticacion/auth.service';
import { ITrabajoModisteria } from 'src/app/classmodels/interfaces/itrabajos';

@Component({
  selector: 'app-registro-trabajos',
  templateUrl: './registro-trabajos.component.html',
  styleUrls: ['./registro-trabajos.component.sass']
})
export class RegistroTrabajosComponent implements OnInit {

  trabajoForm: ITrabajoModisteria = {id: 0, nombre: '', descripcion: '', id_estado: 1, estado: '', id_usuario: 0};
  clientes: IUsuario[];

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { 
    this.clientes = authService.usuarios.filter(usuario => (usuario.nomUsuario != "admin"));
    console.log(this.clientes);
  }

  ngOnInit(): void {
  }

  nuevoTrabajo(){
    let id_usuario = Number(this.trabajoForm.id_usuario);
    this.trabajoForm.id_usuario = 0;
    this.trabajoForm.id_usuario = id_usuario;
    this.apiService.post('nuevoTrabajo', this.trabajoForm).subscribe(data => {
      alert('Trabajo creado...');
      this.router.navigate(['registroTrabajos']);
      this.trabajoForm = {id: 0, nombre: '', descripcion: '', id_estado: 1, estado: '', id_usuario: 0};
    });
  }

}
