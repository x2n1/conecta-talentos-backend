import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OfertaLaboral } from 'src/modelos/ofertaLaboral';
import { OfertasLaboralesService } from './ofertas-laborales.service';


@Controller('ofertas-laborales')
export class OfertasLaboralesController {

    constructor( private readonly servicio:OfertasLaboralesService){ }

    @Post()
    crearNuevaOfertaLaboral(@Body() ofertaLaboral: OfertaLaboral): void{
        this.servicio.crearNuevaOfertaLaboral(ofertaLaboral)
    }

    @Get(':id')
    obtenerOfertaLaboralPorID(@Param('id') idx: number): OfertaLaboral{
        return this.servicio.obtenerOfertaLaboralPorID(idx)
    }

    @Get()
    obtenerOfertasLaborales(@Query('empresa') empresa?: string, @Query('estadoPostulacion') estadoPostulacion?: string): OfertaLaboral[]{
        if(empresa){
            return this.servicio.obtenerOfertasLaborales(empresa,estadoPostulacion)
        }
        return this.servicio.obtenerOfertasLaborales()
    }

    @Delete(':id')
    eliminarOfertaLaboralxID(@Param('id') idx: number): void{
        this.servicio.eliminarOfertaLaboralxID(idx)
    }
}
