import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res} from '@nestjs/common';
import { OfertaLaboral } from 'src/modelos/ofertaLaboral';
import { OfertasLaboralesService } from './ofertas-laborales.service';
import { Response} from 'express';


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
    obtenerOfertasLaborales(
        @Res() response: Response,
        @Query('empresa') empresa?: string, 
        @Query('estadoPostulacion') estadoPostulacion?: string): void{
            if(empresa){
                response.status(200).send(this.servicio.obtenerOfertasLaborales(empresa,estadoPostulacion))
            }
            response.status(200).send(this.servicio.obtenerOfertasLaborales())
    }

    @Delete(':id')
    eliminarOfertaLaboralxID(@Param('id') idx: number): void{
        this.servicio.eliminarOfertaLaboralxID(idx)
    }
}
