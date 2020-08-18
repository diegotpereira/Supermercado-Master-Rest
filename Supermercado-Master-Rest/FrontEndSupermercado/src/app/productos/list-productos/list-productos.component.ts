import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Producto } from '../../modelo/producto';
import { ProductoService } from '../../servicios/producto.service';
import { SeleccionProductosComponent } from '../../seleccion-productos/seleccion-productos.component';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  @Output() verProducto = new EventEmitter<Producto>();
  @Output() editarProducto = new EventEmitter<Producto>();
  @Output() borrarProducto = new EventEmitter<Producto>();

  @Input() productos : Producto[];
  
  constructor(private restClient: ProductoService) {
    this.refresh();
   }

  ngOnInit(){
    //this.refresh();
  }

  ver(venta){
    this.verProducto.emit(venta);
  }

  editar(venta){
    this.editarProducto.emit(venta);
  }

  borrar(venta){
    
    this.borrarProducto.emit(venta);
    this.refresh();
  }

  refresh(){
    this.productos = [];
    this.restClient.findAll().subscribe(datos => {
      this.productos = datos; 
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
