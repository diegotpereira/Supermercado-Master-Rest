import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VentaService } from '../servicios/venta.service';
import { Venta } from '../modelo/venta';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  showAdd = false;
  showEdit = false;
  showList = true;
  showView = false;
  showSelections = false;

  venta: Venta;

  

  constructor(private restClient: VentaService) { }

  ngOnInit() {
    this.venta = new Venta();
  }

  agregarProducto(){
    this.showAdd = true;
    this.showEdit = false;
    this.showList = false;
    this.showView = false;
  }

  listaVentas(event){
    this.showAdd = false;
    this.showEdit = false;
    this.showList = true;
    this.showView = false;
  }

  verVenta(event){
    this.venta = event;
    this.showAdd = false;
    this.showEdit = false;
    this.showList = false;
    this.showView = true;
  }

  editarVenta(event){
    this.venta = event;
    this.showAdd = false;
    this.showEdit = true;
    this.showList = false;
    this.showView = false;
  }
  
  borrarVenta(event){
    if(this.restClient.deleteVenta(this.venta))
      alert("Se borró la venta");
    else
      alert("No se ha podico borrar la venta");

    this.venta = event;
    this.showAdd = false;
    this.showEdit = false;
    this.showList = true;
    this.showView = false;
  }

}
