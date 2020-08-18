import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Venta } from '../../modelo/venta';
import * as jsPDF from 'jspdf'; 


@Component({
  selector: 'app-view-venta',
  templateUrl: './view-venta.component.html',
  styleUrls: ['./view-venta.component.css']
})
export class ViewVentaComponent implements OnInit {

  @Input() venta: Venta;

  constructor() { }

  ngOnInit() {
  
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
  

 getTotal(){
  let t = 0;
  for(let d of this.venta.detalles){
    t += d.producto.valor * d.cantidad;
  }

  return t;
}

}
