import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Venta } from '../../modelo/venta';
import { VentaService } from '../../servicios/venta.service';
import { ProductoService } from '../../servicios/producto.service';
import { Detalle } from '../../modelo/detalle';
import { Producto } from '../../modelo/producto';
import { asQueryList } from '@angular/core/src/view';

@Component({
  selector: 'app-add-venta',
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.css']
})
export class AddVentaComponent implements OnInit {

  venta :Venta;
  showSelecter = true;
  detalles: Detalle[] = [];
  detalle: Detalle;
  total: number;
  
  @Output() listaVentas = new EventEmitter<Boolean>();

  constructor(private restClient: VentaService, private restClient2: ProductoService) { }

  ngOnInit() {
    this.venta = new Venta();    
    this.showSelecter = true;
    this.detalle = new Detalle();
    this.detalle.cantidad=0;
    this.total=0;
  }

  addVenta(){

    this.cerrarDetalles();
    this.venta.detalles = this.detalles;
    this.venta.total = this.getTotal();
    this.venta.fecha = new Date();

    if(this.restClient.addVenta(this.venta)){
          alert("Se agregó la venta");

          this.listaVentas.emit(true);
          this.venta = new Venta();
          this.detalles= [];
        }else{
          alert("Ha ocurrido un error");
        }
   
  }

  onProductSelected(event){
    
    this.detalle.producto = event;
    this.detalles.push(this.detalle);
    this.detalle = new Detalle();
    this.detalle.cantidad=0;
  }

  onProductDisSelected(event){
    
    this.deleteDetalle(event.id);
    
  }

  deleteDetalle(id){
    let i=-1;
    
      for(i=0; i< this.detalles.length; i++)
      {
        if(this.detalles[i].producto.id == id){
          break;
        }
      }

      if(i>=0){
        this.detalles.splice(i,1);    
      }
  }

  getTotal(){
    let t = 0;
    for(let d of this.detalles){
      t += d.producto.valor * d.cantidad;
    }
  
    return t;
  }

  getSubTotal(cantidad, precio){
    
    return cantidad * precio;
  }

  cerrarDetalles(){

    for(let d of this.detalles){
      d.subdescuento = (d.cantidad*d.producto.valor)*(d.producto.descuento/100);
      d.subTotal = d.cantidad*d.producto.valor;
    }
  
  }

} 
