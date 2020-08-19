import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario :Usuario;

  constructor(private restClient: UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  registrar(){
    
    if(this.restClient.addUsuario(this.usuario)){
      alert("Cadastrado com sucesso");
      this.usuario = new Usuario();
    }else{
      alert("Ocorreu um erro");
    }
   
  }

}
