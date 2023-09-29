export class Chat {
//ESTOS ATRIBUTOS TIENEN QUE SER IGUALES QUE EN MYSQL//
        
    constructor(public idchat: number,
                public datehour: Date,
                public hasnewmessage:boolean, 
                public firstname:string,
                public surname:string,
                public photo:string){
                
                this.idchat = idchat;
                this.datehour = datehour;
                this.hasnewmessage = hasnewmessage;
                this.firstname = firstname; 
                this.surname = surname; 
                this.photo = photo; 
            }
}
