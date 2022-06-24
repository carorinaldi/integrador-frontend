import { Proveedor } from "./proveedor";

export class Producto {
  id!: number;
  nombre!: string;
  precio!: number;
  proveedor!: Proveedor;
  stock!: number;
  imagen!: string;

  //String nombre, double precio, Proveedor proveedor, int stock, String imagen
}
