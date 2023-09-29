import { User } from "./user";
import { Chat } from "./chat";

export class Respuesta 
{
    public data?: Chat;
    constructor(public error:boolean,
                public codigo:number,
                public mensaje:string,
                public dataUser?: User,
                public result?:Chat[],
                public res_chat?: Chat
                ){}
}

