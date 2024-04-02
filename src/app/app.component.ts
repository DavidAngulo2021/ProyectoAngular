import { Component } from '@angular/core';
import { Persona } from './models/persona';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//creando la logica

export class AppComponent {
  persona:Persona = new Persona();

  datatable:any = [];

  constructor(private personaservices:PersonaService){

  }
 //esto es para iniciar el componente datatable
  ngOnInit(): void {
  this.onDatatable();     
  }

  //se llama el sericio personaservices para mostrar los dato en el datatable
  onDatatable(){
    this.personaservices.getMostrar().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }

// esto es para seleccionar una fila en la tabla
  onsetData(select:any){
    this.persona.id =select.id
    this.persona.userId =select.userId
    this.persona.title =select.title
    this.persona.body =select.body
  }

  //se crea la logica para agregar
  onagregar(persona:Persona):void{
    this.personaservices.addagregar(persona).subscribe(res=>{
      if(res){
        console.log(res);
        alert(`El ${persona.title} se ha registrado con exito!`);
        this.onDatatable();
      }else{
        alert(`El Error! :(`)
      }
    });

  }
 //se crea la logica para editar
  onUpdate(persona:Persona):void{
  this.personaservices.uptadeP(persona.id,persona).subscribe(res=>{
    if(res){
      console.log(res);
      alert(`El ${persona.id} se ha editado con exito!`);
      this.onDatatable();
    }else{
      alert(`El Error! :(`)
    }
  })
  }

   //se crea la logica para eliminar
  onDelete(id:number):void{
    this.personaservices.delete(id).subscribe(res=>{
      if(res){
        console.log(res);
        alert(`El UserID  ${this.persona.userId} se ha eliminado!`);
        this.onDatatable();
      }else{
        alert(`El Error! :(`)
      }
    });
  }
  
}
