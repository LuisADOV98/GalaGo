export class Prenda {
   
    public title?: string;
    public price?: number;
    public description?: string; 
    public state?: string;//"Nuevo", "Semi nuevo","Usado"
    public evento?: string;//"Bodas","Comuniones","Nochevieja","Disfraces"
    public tipo?: string; //"Accesorio", "Mujer", "Hombre"
    public size?:string; //"Unica","S","M","L","XL","XXL"
    public photo1?: string;
    public photo2?: string;
    public photo3?: string;
    public photo4?: string;
    public idprenda?: number;
    public iduser?: number;
    public location?: string;

    constructor(
                title?:string,
                price?:number,
                description?:string,
                state?:string, 
                size?:string,
                evento?:string, 
                tipo?:string,
                photo1?: string,
                photo2?: string,
                photo3?: string,
                photo4?: string,
                idprenda?:number,
                iduser?:number,
                location?: string ){
                    
                    this.title = title;
                    this.price = price;
                    this.description = description;
                    this.state = state;
                    this.size = size;
                    this.evento = evento;
                    this.tipo = tipo;
                    this.photo1 = photo1;
                    this.photo2 = photo2;
                    this.photo3 = photo3;
                    this.photo4 = photo4;
                    this.location = location;
                    this.idprenda = idprenda;
                    this.iduser = iduser;
    }


    
}




