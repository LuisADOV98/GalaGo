

export class Mensaje {
    constructor(
                public idmessage?: number,
                public message?: string,
                public iduser?:number,
                public idchat?:number,
                ){
        
                this.idmessage= idmessage;
                this.message = message;
                this.iduser = iduser;
                this.idchat = idchat;
                }
}

// export class Mensaje {
//     constructor(
//                 public emisor: string, //hay que cambiarlo por id
//                 public contenido: string,
//                 ){
        
//                 this.emisor = emisor;
//                 this.contenido = contenido;
        
//                 }
// }
