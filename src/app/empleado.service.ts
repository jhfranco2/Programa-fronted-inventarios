import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
 //Esta url obtiene el listado de todos los empleados en el backend.
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient:HttpClient) { }

  //Este metodo nos sirve para obtener los empleados
obtenerListaEmpleados():Observable<Empleado[]>{
  return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
}
//Se esta recibiendo la url y se le envia un inventario.
 registrarEmpleado(empleado:Empleado):Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,empleado);
 }

  obtenerElInventarioPorId(id:number):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
     
 }
 elimniarInventario(id:number):Observable<Object>{
return this.httpClient.delete(`${this.baseURL}/${id}`);
 }
}
