import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/baseDatos/api.service';
import { IServiciosModisteria } from 'src/app/classmodels/interfaces/iservicios';

@Component({
  selector: 'app-serviciosmacla',
  templateUrl: './serviciosmacla.component.html',
  styleUrls: ['./serviciosmacla.component.sass']
})
export class ServiciosmaclaComponent implements OnInit {

  servicios: IServiciosModisteria[];

  constructor(private apiService: ApiService) { 
    this.apiService.get('serviciosMacla').subscribe(data => {
      this.servicios = data['servicios'];
      console.log(this.servicios);
    })
  }

  ngOnInit(): void {
  }

}
