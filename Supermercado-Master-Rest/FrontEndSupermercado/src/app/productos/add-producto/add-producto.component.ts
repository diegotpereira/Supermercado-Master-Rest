import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../modelo/producto';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {


  @Output() listaProductos = new EventEmitter<Boolean>();

  producto:Producto;
  
  constructor(private restClient: ProductoService) { }

  ngOnInit() {
    this.producto = new Producto();
  }


  addProducto(){
    
    if(this.restClient.addProducto(this.producto)){
      this.producto = new Producto();
      alert("Ingrese un nuevo producto");
    }else{
      alert("Ha ocurrido un error");
    }
  }


  
  addProducts(){
    
    this.producto.nombre = "Manzana Verde";
    this.producto.sku = "FRUT-MANZ-VE-1"
    this.producto.uniMedida = "unidad";
    this.producto.valor = 2000;
    this.producto.descuento = 0;

        if(this.restClient.addProducto(this.producto)){
          this.producto = new Producto();
        }else{
          alert("Ha ocurrido un error");
        }

    this.producto.nombre = "Manzana Roja";
    this.producto.sku = "FRUT-MANZ-RO-2"
    this.producto.uniMedida = "unidad";
    this.producto.valor = 2000;
    this.producto.descuento = 0;

        if(this.restClient.addProducto(this.producto)){
          this.producto = new Producto();
        }else{
          alert("Ha ocurrido un error");
        }

    this.producto.nombre = "Banano Tradicional";
    this.producto.sku = "FRUT-BANA-TR-1"
    this.producto.uniMedida = "unidad";
    this.producto.valor = 500;
    this.producto.descuento = 0;

        if(this.restClient.addProducto(this.producto)){
          this.producto = new Producto();
        }else{
          alert("Ha ocurrido un error");
        }

    this.producto.nombre = "Banano Bocadillo";
    this.producto.sku = "FRUT-BANA-BO-2"
    this.producto.uniMedida = "unidad";
    this.producto.valor = 500;
    this.producto.descuento = 0;
    
        if(this.restClient.addProducto(this.producto)){
          this.producto = new Producto();
        }else{
          alert("Ha ocurrido un error");
        }
        this.listaProductos.emit(true);
  }

  

}
