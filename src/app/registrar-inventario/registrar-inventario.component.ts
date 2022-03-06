import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-inventario',
  templateUrl: './registrar-inventario.component.html',
  styleUrls: ['./registrar-inventario.component.css']
})
export class RegistrarInventarioComponent implements OnInit {

  empleado : Empleado = new Empleado();

  constructor(private inventariodoServicio:EmpleadoService,private router:Router) { }

  ngOnInit(): void {
    
  }
  guardarEmpleado(){
    this.inventariodoServicio.registrarEmpleado(this.empleado).subscribe(dato=>{
      console.log(dato);
      this.irALaListaInventario();
    },error => console.log(error));
    
    }   
    irALaListaInventario(){
      this.router.navigate(['/empleados']);
    }
  
onSubmit(){
  this.guardarEmpleado();
}
}
