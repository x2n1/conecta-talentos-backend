import { Injectable } from '@nestjs/common';
import { Empresa } from 'src/modelos/empresa';
import { OfertaLaboral } from 'src/modelos/ofertaLaboral';

@Injectable()
export class OfertasLaboralesService {


    private ofertasLaborales: OfertaLaboral[] = [];

    crearNuevaOfertaLaboral(ofertaLaboral: OfertaLaboral): void{
        ofertaLaboral.id = this.ofertasLaborales.length + 1

        this.ofertasLaborales.push(ofertaLaboral)
    }


    obtenerOfertaLaboralPorID(idx: number): OfertaLaboral{
        for(let i: number = 0; i < this.ofertasLaborales.length; i++){
            if(this.ofertasLaborales[i].id == idx){
                return this.ofertasLaborales[i]
            }
        }
        return null
    }


    obtenerOfertasLaborales(empresa?: string, tipoPostulacion?: string): OfertaLaboral[]{
        // if(empresa){
        //     for()
        //     return this.ofertasLaborales.empresa
        // }
        return this.ofertasLaborales
    }

    eliminarOfertaLaboralxID(idx: number): void{
        for(let i: number = 0; i < this.ofertasLaborales.length; i++){
            if(this.ofertasLaborales[i].id == idx){
                this.ofertasLaborales.splice(i,1)
            }
        }
        return null
    }
}
