import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaInventarioComponent } from './lista-inventario/lista-inventario.component';
import { RegistrarInventarioComponent } from './registrar-inventario/registrar-inventario.component';

const routes: Routes = [
  {path:'empleados',component:ListaInventarioComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path:'registrar-inventario',component:RegistrarInventarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
