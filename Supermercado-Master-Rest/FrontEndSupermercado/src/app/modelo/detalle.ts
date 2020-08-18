import { Producto } from "./producto";

export class Detalle {
    id: number;
    cantidad: number;
    subdescuento: number;
    subTotal: number;
    producto: Producto;
    
}
