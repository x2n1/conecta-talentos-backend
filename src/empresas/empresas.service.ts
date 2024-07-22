import { Injectable } from '@nestjs/common';
import { Empresa } from 'src/modelos/empresa';

@Injectable()
export class EmpresasService {

    //Para que servian los servicios?
    //Porque es preferible dejar los metodos de la clase empresa en el servicio en vez del controller?

    // Porque el private?
    // Recordar que estos casos estoy dejando todas las empresas []
    private empresas: Empresa[] = [];

    crearNuevaEmpresa(empresa: Empresa): void{
        empresa.id = this.empresas.length + 1

        for(let i: number = 0; i < this.empresas.length; i++){
            if(this.empresas[i].nombre == empresa.nombre){
                return console.log("Empresa ingresada con este nombre ya existe, porfavor ingresar uno nuevo");
            }
        }
        this.empresas.push(empresa)
    }


    obtenerEmpresaPorID(idx: number): Empresa{
        for(let i: number = 0; i < this.empresas.length; i++){
            if(this.empresas[i].id == idx){
                return this.empresas[i]
            }
        }
        return null
    }


    obtenerEmpresas(): Empresa[]{
        return this.empresas
    }

    eliminarEmpresaxID(idx: number): void{
        for(let i: number = 0; i < this.empresas.length; i++){
            if(this.empresas[i].id == idx){
                this.empresas.splice(i,1)
            }
        }
        return null
    }
}
