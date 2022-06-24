import { ProductoService } from './../servicios/producto.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelo/producto';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(response => this.productos = response);
  }

}
