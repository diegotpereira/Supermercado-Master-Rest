import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Venta } from '../../modelo/venta';
import { VentaService } from '../../servicios/venta.service';

@Component({
  selector: 'app-list-ventas',
  templateUrl: './list-ventas.component.html',
  styleUrls: ['./list-ventas.component.css']
})
export class ListVentasComponent implements OnInit {

  @Output() verVenta = new EventEmitter<Venta>();
  @Output() editarVenta = new EventEmitter<Venta>();
  @Output() borrarVenta = new EventEmitter<Venta>();

  ventas : Venta[]=[];

  constructor(private restClient: VentaService) { }

  ngOnInit() {
    this.refresh();
  }

  ver(venta){
    this.verVenta.emit(venta);
  }

  editar(venta){
    this.editarVenta.emit(venta);
  }

  borrar(venta){
    this.borrarVenta.emit(venta);
    this.refresh();
  }

  refresh(){
    this.ventas = [];
    this.restClient.findAll().subscribe(datos => {
      this.ventas = datos; 
      },
      error => {     alert("error");
    });
  }

  getFecha(date){
    
    var today = new Date(date);
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    
    var yyyy = today.getFullYear();
    /*
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } */
    var fecha = dd+'/'+mm+'/'+yyyy;

    return fecha;
  }

}
