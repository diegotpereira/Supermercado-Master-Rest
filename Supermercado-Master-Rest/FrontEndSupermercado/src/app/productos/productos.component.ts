import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  producto : Producto;
  productos : Producto[] = [];

  showAdd = false;
  showEdit = false;
  showList = true;
  showView = false;
  showSelections = false;

  constructor(private restClient: ProductoService) { }

  ngOnInit() {
      this.producto = new Producto();
  }

  

  //----------------------------------------

  agregarProducto(){
    this.showAdd = true;
    this.showEdit = false;
    this.showList = false;
    this.showView = false;
  }

  listaProductos(event){
    this.showAdd = false;
    this.showEdit = false;
    this.showList = true;
    this.showView = false;
    this.refreshProducts();
  }

  verProducto(event){
    this.producto = event;
    this.showAdd = false;
    this.showEdit = false;
    this.showList = false;
    this.showView = true;
  }

  editarProducto(event){
    this.producto = event;
    this.showAdd = false;
    this.showEdit = true;
    this.showList = false;
    this.showView = false;
  }
  
  borrarProducto(event){
    this.producto = event;
    if(this.restClient.deleteProducto(this.producto))
      alert("Se borró el producto");
    else
      alert("No se ha podico borrar la venta");

    this.producto = event;
    this.showAdd = false;
    this.showEdit = false;
    this.showList = true;
    this.showView = false;
  }

  refreshProducts(){
    this.productos = [];
    this.restClient.findAll().subscribe(datos => {
      this.productos = datos; 
      },
      error => {     
    });
  }

}
