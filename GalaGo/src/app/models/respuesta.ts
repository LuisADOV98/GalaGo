import { Prenda } from "./prenda";
import { User } from "./user";
import { Chat } from "./chat";
import { Propietarioprenda } from "./propietarioprenda";

export class Respuesta 
{
    constructor(public error: boolean,
                public codigo: number,
                public mensaje: string,
                public dataUser?: User,
                public dataEnum?: string[],//devuelve un array de string de los enum de mysql
                public data?: Prenda[],
                public dataPrenda?: Prenda,
                public result?:Chat[],
                public res_chat?: Chat,
                public data1?:Propietarioprenda[],
                public imagen?:string,
                ){}
  
                
}

