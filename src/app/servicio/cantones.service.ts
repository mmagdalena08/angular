import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CantonesService {

  constructor(private http: HttpClient) { }
  getprovincia(){
    return this.http.get<any[]>(`${environment.apiUrl}/provincias`);
  }

  getcanton(){
    return this.http.get<any[]>(`${environment.apiUrl}/cantones`);
  }

  postcanton(formve: any){  
    const params = new FormData();
    params.append('canton', formve.canton);
    params.append('imagen', formve.imagen);
    params.append('id_provincia', formve.id_provincia);
    return this.http.post(`${environment.apiUrl}/cantones`,params);
  }

  deletecanton(_id:any, formve: any)
  {
    const params = new FormData();
    params.append('canton', formve.canton);
    params.append('imagen', formve.imagen);
    params.append('id_provincia', formve.id_provincia);
    return this.http.delete(`${environment.apiUrl}/cantones/`+_id);
  }
  
}
