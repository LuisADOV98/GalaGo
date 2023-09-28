import { Prenda } from "./prenda";
import { User } from "./user";

export class Respuesta 
{
    constructor(public error: boolean,
                public codigo: number,
                public mensaje: string,
                public dataUser: User,
                public dataEnum: string[],//devuelve un array de string de los enum de mysql
                public data: Prenda[],
                public dataPrenda: Prenda){}
}
