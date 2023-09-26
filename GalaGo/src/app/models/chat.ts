export class Chat {

        
    constructor(public foto: string,
                public nombre: string,
                public prenda: string,
                public hora: Date,
                
                public id_chat?:number){
                
                this.foto = foto;
                this.nombre = nombre;
                this.prenda = prenda;
                this.hora = hora; 
                this.id_chat = id_chat;
            }
}
