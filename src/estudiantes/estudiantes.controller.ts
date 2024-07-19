import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Estudiante } from 'src/modelos/estudiante';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {

    constructor( private readonly servicio:EstudiantesService){ }

    
    @Post()
    crearEstudiante( @Body() estudiante:Estudiante ):void{
        this.servicio.crearEstudiante(estudiante)
    }

    @Get(':id')
    obtenerEstudiantePorId(@Param('id') id: number): Estudiante{
        return this.servicio.obtenerEstudiantePorId(id);
    }

    @Get()
    obtenerEstudiantes(): Estudiante[]{
        return this.servicio.obtenerEstudiantes();

    }

    @Delete(':id')
    eliminarEstudiantePorId(@Param('id') id: number): void{
        this.servicio.eliminarEstudiantePorId(id)
    }
}   
