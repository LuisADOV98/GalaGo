import { Propietarioprenda } from "./propietarioprenda";

export class RespuestaPropietario 
{
    
        constructor(public error: boolean,
                    public codigo: number,
                    public mensaje: string,
                    public data?: Propietarioprenda[],
                    public dataPropietario?:Propietarioprenda){}
      
                    
    }
