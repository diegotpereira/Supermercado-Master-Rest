import { UsuarioService } from './servicios/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VentaComponent } from './venta/venta.component';
import { InventarioComponent } from './inventario/inventario.component';
import { FacturasComponent } from './facturas/facturas.component';
import { SeleccionProductosComponent } from './seleccion-productos/seleccion-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';
import { VentaService } from './servicios/venta.service';
import { ProductoService } from './servicios/producto.service';
import { AddProductoComponent } from './productos/add-producto/add-producto.component';
import { AddVentaComponent } from './venta/add-venta/add-venta.component';
import { ListVentasComponent } from './venta/list-ventas/list-ventas.component';
import { EditVentaComponent } from './venta/edit-venta/edit-venta.component';
import { ViewVentaComponent } from './venta/view-venta/view-venta.component';

import * as jspdf from 'jspdf'; 
 

import { ViewFacturaComponent } from './facturas/view-factura/view-factura.component';
import { EditProductoComponent } from './productos/edit-producto/edit-producto.component';
import { ListProductosComponent } from './productos/list-productos/list-productos.component';
import { ViewProductoComponent } from './productos/view-producto/view-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    VentaComponent,
    InventarioComponent,
    FacturasComponent,
    SeleccionProductosComponent,
    ProductosComponent,
    RegistroComponent,
    AddProductoComponent,
    AddVentaComponent,
    ListVentasComponent,
    EditVentaComponent,
    ViewVentaComponent,
    ViewFacturaComponent,
    EditProductoComponent,
    ListProductosComponent,
    ViewProductoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ProductoService, UsuarioService, VentaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
