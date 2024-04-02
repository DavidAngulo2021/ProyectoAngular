import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

//definiendo el servicio

  constructor(private http:HttpClient) { }
 
  url:string = "https://jsonplaceholder.typicode.com/posts";

    //este metodo se utiliza para motrar datos del servidor

  getMostrar(){
    return this.http.get(this.url);
    
  }
 //este metodo se utiliza para enviar datos al servidor
  addagregar(Persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url,Persona)
  }

  //este metodo se utiliza para editar datos al servidor
  uptadeP(id:number,Persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.url +`/${id}`,Persona)
  }
  //este metodo se utiliza para elimnar datos al servidor

  delete(id:number){
    return this.http.delete<Persona>(this.url +`/${id}`)
  }

}
