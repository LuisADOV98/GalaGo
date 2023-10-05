import { Propietarioprenda } from "./propietarioprenda";
import { User } from "./user";

export class RespuestaPropietario 
{
    
        constructor(public error: boolean,
                    public codigo: number,
                    public mensaje: string,
                    public data?: User,
                    public idchat?:number,
                    ){}
      
                    
    }
