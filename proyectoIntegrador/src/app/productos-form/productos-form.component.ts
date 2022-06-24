import { ProductoService } from './../servicios/producto.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelo/producto';
import { Proveedor } from '../modelo/proveedor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  producto: Producto = new Producto();
  proveedores: Proveedor[] = [];

  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productoService.getProveedores().subscribe(response => this.proveedores = response);

    this.activatedRoute.params.subscribe(params => {
      let id: number = params['id'];
      if(id){
        this.productoService.obtenerProducto(id).subscribe(response => this.producto = response);
      }
    })
  }

  crearProducto() {
    this.productoService.crearProducto(this.producto).subscribe(response=>this.router.navigate(['/productos'])); //console.log("SE CREÓ CON ÉXITO!!")
  }

  actualizarProducto() {
    this.productoService.actualizarProducto(this.producto).subscribe(response=>this.router.navigate(['/productos']))

  }

}
