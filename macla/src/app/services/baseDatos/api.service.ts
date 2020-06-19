import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IUsuario } from 'src/app/classmodels/interfaces/iusuario';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi: string = 'http://localhost:2020/macla.php?accion=';

  constructor(private httpClient: HttpClient) {
  }

  get(urlComplement){
    let url = this.urlApi+urlComplement;
    return this.httpClient.get(url);
  }

  post(urlComplement, data){
    let url = this.urlApi+urlComplement;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, *', 
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<IUsuario>(url, data, httpOptions);
  }

}
