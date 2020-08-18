import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentaComponent } from './venta/venta.component';
import { InventarioComponent } from './inventario/inventario.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';
import { ViewFacturaComponent } from './facturas/view-factura/view-factura.component';


const routes: Routes = [
  { path: 'inventario', component: InventarioComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'facturas/view-factura/:id', component: ViewFacturaComponent },
  { path: 'venta', component: VentaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
