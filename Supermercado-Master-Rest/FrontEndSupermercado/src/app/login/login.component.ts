import { UsuarioService } from './../servicios/usuario.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';

  showLogin = true;
  showLogout = false;

  @Output() onLogin = new EventEmitter<Boolean>();
  @Output() onRegistro = new EventEmitter<Boolean>();
  result: any;

  message: any;



  constructor(private restClient: UsuarioService) { }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.user + ' - ' + this.password);
    this.restClient.login(this.user, this.password).subscribe(data => {
      this.message = 'Login Ok';
      this.showLogin = false;
      this.showLogout = true;
      this.onLogin.emit(true);
      alert(data);
    }, error => {
      alert("Usuario o contraseña invalidos");
      this.message = JSON.stringify(error);
      this.onLogin.emit(false);
    });
  }

  getTestData() {
    this.restClient.getTestData().subscribe(
      data => {
        console.log('Success' + data);
        this.message = JSON.stringify(data);
      },
      error => {
        console.error(error);
        this.message = JSON.stringify(error);
      }
    );
  }

  getRestrictedData() {
    this.restClient.getRestrictedData().subscribe(
      data => {
        console.log('Success' + data);
        this.message = JSON.stringify(data);
      },
      error => {
        
        this.message = JSON.stringify(error);
      }
    );
  }

  logout() {
    this.restClient.logout().subscribe(data => {
      alert("Sesión Finalizada");
      this.showLogin = true;
      this.showLogout = false;
    }, error => {
      
      this.message = JSON.stringify(error);
    });
  }

  registrar(){
    this.onRegistro.emit(true);
  }  

}
