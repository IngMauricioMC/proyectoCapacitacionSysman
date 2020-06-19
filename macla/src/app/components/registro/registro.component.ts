import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/baseDatos/api.service';
import { AuthService } from "../../services/autenticacion/auth.service";
import { IUsuario } from '../../classmodels/interfaces/iusuario';
import { ICiudad } from 'src/app/classmodels/interfaces/iciudad';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  usuarioForm: IUsuario = {id: 0, nombre: "", telefono: "", email: "", direccion: "", nomUsuario: "", contrasena: "", id_ciudad: 0};
  ciudades: ICiudad[];

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) {
    this.apiService.get('ciudad').subscribe(data => {
      this.ciudades = data['ciudades'];
    });
  }

  ngOnInit(): void {
  }

  async crear(){
    let idCiudad = Number(this.usuarioForm.id_ciudad);
    this.usuarioForm.id_ciudad = 0;
    this.usuarioForm.id_ciudad = idCiudad;
    this.authService.nuevoUsuario(this.usuarioForm);
    await this.router.navigate(['/nosotros']);
  }

}
