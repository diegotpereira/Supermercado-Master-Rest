import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../modelo/producto';
import { Detalle } from '../modelo/detalle';

@Component({
  selector: 'app-seleccion-productos',
  templateUrl: './seleccion-productos.component.html',
  styleUrls: ['./seleccion-productos.component.css']
})
export class SeleccionProductosComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onProductSelected = new EventEmitter<Producto>();
  @Output() onProductDisSelected = new EventEmitter<Producto>();
  
  productos : Producto[]=[];
  detalles: Detalle[]=[];

  constructor(private restClient: ProductoService) { }

  ngOnInit() {
    this.listar();    
  }

  productSelected(id){
    if(document.getElementById("product"+id).className == "productoSeleccionado"){
      document.getElementById("product"+id).className="producto";
      this.onProductDisSelected.emit(this.findProduct(id));
    }else{
      document.getElementById("product"+id).className="productoSeleccionado";
    this.onProductSelected.emit(this.findProduct(id));
    }
    
  }

  findProduct(id){
    
    for(let p of this.productos){
      if(p.id == id){
        return p;
      }
    }
    return null;
  }

  listar(){
    this.restClient.findAll().subscribe(datos => {
      this.productos = datos; 
    },
    error => {     alert("error");
  });
  }


}
