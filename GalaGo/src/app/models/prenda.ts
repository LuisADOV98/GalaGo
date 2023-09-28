export class Prenda {
   
    public title?: String;
    public price?: number;
    public description?: String; 
    public state?: String;//"Nuevo", "Semi nuevo","Usado"
    public event?: String;//"Bodas","Comuniones","Nochevieja","Disfraces"
    public type?: String; //"Accesorio", "Mujer", "Hombre"
    public size?:String; //"Unica","S","M","L","XL","XXL"
    public photo1?: String;
    public photo2?: String;
    public photo3?: String;
    public photo4?: String;
    public idprenda?: number;
    public iduser?: number;
    constructor(
                
                title?:String,
                price?:number,
                description?:String,
                state?:String, 
                size?:String,
                event?:String, 
                type?:String,
                photo1?: string,
                photo2?: string,
                photo3?: string,
                photo4?: string,
                idprenda:number = 0,
                iduser:number = 0){
                    
                    this.title = title;
                    this.price = price;
                    this.description = description;
                    this.state = state;
                    this.size = size;
                    this.event = event;
                    this.type = type;
                    this.photo1 = photo1;
                    this.photo2 = photo2;
                    this.photo3 = photo3;
                    this.photo4 = photo4;
                    this.idprenda = idprenda;
                    this.iduser = iduser

    }


    
}




