import { Component, OnInit, Input } from '@angular/core';
import { Venta } from '../../modelo/venta';
import { Producto } from '../../modelo/producto';

@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.css']
})
export class ViewProductoComponent implements OnInit {

  @Input() producto: Producto;  

  constructor() { }

  ngOnInit() {
  }

}
