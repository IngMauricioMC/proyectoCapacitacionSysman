import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/services/baseDatos/api.service';
import { ITrabajoModisteria } from 'src/app/classmodels/interfaces/itrabajos';
import { IEstado } from 'src/app/classmodels/interfaces/iestados';

@Component({
  selector: 'app-trabajosmacla',
  templateUrl: './trabajosmacla.component.html',
  styleUrls: ['./trabajosmacla.component.sass']
})
export class TrabajosmaclaComponent implements OnInit {

  trabajos: ITrabajoModisteria[];
  estados: IEstado[];
  id: number;
  estadoForm: boolean;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params.id;
    this.apiService.get('misTrabajos&id='+this.id).subscribe(data => {
      if (data['trabajos'].length == 0) {
        this.estadoForm = false;
      }else
        this.estadoForm = true;
      this.trabajos = data['trabajos'];
    });
    this.apiService.get('estados').subscribe(data => {
      this.estados=data['estados'];
      this.asignarEstado();
    });
  }

  ngOnInit(): void {
  }

  asignarEstado(){
    this.trabajos.forEach(trabajo => {
      trabajo.id_estado = Number(trabajo.id_estado);
      let estadoSeleccion = this.estados.filter(estado => estado.id == trabajo.id_estado)[0];
      if (estadoSeleccion) {
        trabajo.estado = estadoSeleccion.nombre;
      }
    });
  }

}
