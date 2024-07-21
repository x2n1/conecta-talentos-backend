import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/modelos/estudiante';

@Injectable()
export class EstudiantesService {

    private estudiantes: Estudiante[] = [];

    
    crearEstudiante(estudiante:Estudiante ):void{
        estudiante.id = this.estudiantes.length + 1;
        for(let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].email == estudiante.email){
                return console.log("Estudiante ingresado con este correo ya existe, porfavor ingresar uno nuevo");
            }
        }
        this.estudiantes.push(estudiante);
    }

    obtenerEstudiantePorId(id: number): Estudiante{
        for(let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == id){
                return this.estudiantes[i];
            }
        }
        return null; 

    }

    obtenerEstudiantes(): Estudiante[]{
        return this.estudiantes;

    }

    eliminarEstudiantePorId(id: number): void{
        for(let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == id){
                this.estudiantes.splice(i, 1);
            }
        }
    }



}
