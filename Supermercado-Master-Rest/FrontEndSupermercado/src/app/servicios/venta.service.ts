import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Venta } from '../modelo/venta';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VentaService {

  constructor(private http: HttpClient) { }


  addVenta(venta: Venta){
    
    return this.http.post('http://localhost:8080/venta/add', venta, {withCredentials: true})
      .subscribe(
        res => {
          return true;
        },
        err => {
          return false;
        }
      )   ;
  }

  deleteVenta(venta: Venta){
    
    return this.http.post('http://localhost:8080/venta/delete/'+venta.id,{withCredentials: true})
      .subscribe(
        res => {
          alert(venta.id);
          return true;
        },
        err => {
          return false;
        }
      )   ;
  }

  findAll(): Observable<Venta[]> {
    return this.http.get<Venta[]>('http://localhost:8080/venta',{withCredentials: true});
  }

  findVentaById (id: number): Observable <Venta>{
    
    return this.http.get<Venta>('http://localhost:8080/venta/'+id,
  {withCredentials: true});
}  

}
