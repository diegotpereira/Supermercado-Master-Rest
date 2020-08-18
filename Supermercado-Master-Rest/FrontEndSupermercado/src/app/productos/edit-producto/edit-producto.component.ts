import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Venta } from '../../modelo/venta';
import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../modelo/producto';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  @Input() producto: Producto;
  @Output() listarProductos = new EventEmitter<Boolean>();
  
  constructor(private restClient: ProductoService) { }

  ngOnInit() {
  }

  guardarProducto(){
    if(this.restClient.editProducto(this.producto)){
      this.producto = new Producto();
      alert("Producto Editado");
      this.listarProductos.emit(true);
    }else{
      alert("Ha ocurrido un error");
    }
  }
}

