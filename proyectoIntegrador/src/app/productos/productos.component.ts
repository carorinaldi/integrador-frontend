
import { ProductoService } from './../servicios/producto.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelo/producto';

@Component({
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(response => this.productos=response);
  }

  eliminarProducto(id: number) {
    this.productoService.eliminarProducto(id).subscribe(response => {
      this.productos=this.productos.filter(producto=> producto.id != id);
    })
  }
}
