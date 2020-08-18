import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  showLogin = true;
  showRegistro = true;
  constructor() { }

  ngOnInit() {
  }

  onRegistro(){
    this.showLogin = false;
    this.showRegistro = !this.showRegistro;
  }

  onLogin(event){
    //this.showLogin = !event;
  }


}
