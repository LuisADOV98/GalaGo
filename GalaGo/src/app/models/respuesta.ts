import { Prenda } from "./prenda";
import { User } from "./user";

export class Respuesta 
{
    constructor(public error:boolean,
                public codigo:number,
                public mensaje:string,
                public dataUser: User,
                public data:Prenda[]){}
}
