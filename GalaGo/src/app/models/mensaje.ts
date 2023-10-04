

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
