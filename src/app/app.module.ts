import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaInventarioComponent } from './lista-inventario/lista-inventario.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarInventarioComponent } from './registrar-inventario/registrar-inventario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaInventarioComponent,
    RegistrarInventarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
