import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VentaService } from '../../servicios/venta.service';
import { ActivatedRoute } from '@angular/router';
import { Venta } from '../../modelo/venta';
import * as jsPDF from 'jspdf'; 



@Component({
  selector: 'app-view-factura',
  templateUrl: './view-factura.component.html',
  styleUrls: ['./view-factura.component.css']
})
export class ViewFacturaComponent implements OnInit {

  id:number;
  venta: Venta;

  constructor(private route: ActivatedRoute, private restClient: VentaService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = +params['id']); // recuperar id

    this.restClient.findVentaById(this.id).subscribe(
      data => {
        this.venta = data;
      },
      err => {
        alert("No hay una vernta seleccionada");
      }
    )   ;

  }

  @ViewChild('content') content:  ElementRef;

  public generatePDF(){ 
    let doc= new jsPDF();
    
    let specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };
    //alert(this.content.nativeElement.value);
    //let content = this.content.nativeElement;

    let content = document;

    doc.fromHTML(content.getElementById('content'), 15, 15, {
      'width': 109,
      'elementHandlers': specialElementHandlers
    });

    doc.save('Factura de Venta - N°'+this.id+".pdf");

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

  getDescuento(){
    let descuento=0;
    for(let d of this.venta.detalles){
      descuento += d.subdescuento;
    }
    return descuento;
  }

}
