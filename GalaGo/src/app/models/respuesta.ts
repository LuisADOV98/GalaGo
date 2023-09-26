import { Chat } from "./chat";

export class Respuesta {
    data?: Chat;
    constructor(public error:boolean,
                public codigo:number,
                public mensaje:string,
                public result?:Chat[],
                public res_chat?: Chat){}
                
}