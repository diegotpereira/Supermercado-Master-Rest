import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  addUsuario(usuario: Usuario){
    
    return this.http.post('http://localhost:8080/usuario/add', usuario, {withCredentials: true})
      .subscribe(
        res => {
          return true;
        },
        err => {
          return false;
        }
      );
    /*
    this.http.post('http://localhost:8080/usuario/add',null,{
      headers: headers,
      withCredentials: true
    });*/
}

  login(username: string, password: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post('http://localhost:8080/login', null, {
      headers: headers,
      params: params,
      withCredentials: true
    });
  }

  getTestData() {
    return this.http.post('http://localhost:8080/api/test', '', {
      withCredentials: true
    });
  }

  getRestrictedData() {
    return this.http.post('http://localhost:8080/api/restricted-method', '', {
      withCredentials: true
    });
  }

  logout() {
    return this.http.post('http://localhost:8080/logout', '', {
      withCredentials: true
    });
  }

  findUserById (id: number): Observable <Usuario>{
    return this.http.get<Usuario>('http://localhost:8080/usuario/'+id,
    {withCredentials: true});
  } 

}
