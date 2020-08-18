import { Detalle } from "./detalle";

export class Venta {
    id: number;
    fecha: Date;
    cliente: string;
    total: number;
    factura: string;
    detalles : Detalle[] = [];
}
