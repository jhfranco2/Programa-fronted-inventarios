import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.component.html',
  styleUrls: ['./lista-inventario.component.css']
})
export class ListaInventarioComponent implements OnInit {

  empleados:Empleado[];
  constructor(private empleadoServicio:EmpleadoService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }
private obtenerEmpleados(){
  this.empleadoServicio.obtenerListaEmpleados().subscribe(dato =>{
    this.empleados = dato;
  })
}
eliminarInventario(id:number){
this.empleadoServicio.elimniarInventario(id).subscribe(dato =>{
  console.log(dato);
  this.obtenerEmpleados();
});
}
}
