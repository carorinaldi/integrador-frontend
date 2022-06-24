import { PaginaNoEncontradaComponent } from './generales/pagina-no-encontrada/pagina-no-encontrada.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductosFormComponent } from './productos-form/productos-form.component';

const routes: Routes = [
  { path: "", component: InicioComponent},
  { path: "productos", component: ProductosComponent},
  { path: "productos/formulario", component: ProductosFormComponent},
  { path: "productos/formulario/:id", component: ProductosFormComponent},
  { path: "**", component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
