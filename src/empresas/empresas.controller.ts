import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { Empresa } from 'src/modelos/empresa';

@Controller('empresas')
export class EmpresasController {

    // De que sirve esto?
    // Porque private readonly?
    constructor( private readonly servicio:EmpresasService){ }

    // Repasar definicion y uso de decoradores
    @Post()
    crearNuevaEmpresa(@Body() empresa: Empresa): void{
        this.servicio.crearNuevaEmpresa(empresa)
    }

    @Get(':id')
    // Porque en el get es con dos puntos el id pero en el param solo id?
    obtenerEmpresaPorID(@Param('id') idx: number): Empresa{
        return this.servicio.obtenerEmpresaPorID(idx)
    }


    @Get()
    obtenerEmpresas(): Empresa[]{
        return this.servicio.obtenerEmpresas()
    }

    @Delete(':id')
    eliminarEmpresaxID(@Param('id') idx: number): void{
        this.servicio.eliminarEmpresaxID(idx)
    }
}
