import { Component, OnInit, Input } from '@angular/core';
import { Venta } from '../../modelo/venta';

@Component({
  selector: 'app-edit-venta',
  templateUrl: './edit-venta.component.html',
  styleUrls: ['./edit-venta.component.css']
})
export class EditVentaComponent implements OnInit {

  @Input() venta: Venta;
  
  constructor() { }

  ngOnInit() {
    alert(this.venta.cliente);
  }

}
