export class Prenda {
    public titulo: String;
    public precio: number;
    public descripcion: String; 
    public ubicacion: String;//"Madrid","Barcelona","Badajoz","avila"
    public estado: String;//"Nuevo", "Semi nuevo","Usado"
    public evento: String;//"Bodas","Comuniones","Nochevieja","Disfraces"
    public tipo: String //"Accesorio", "Mujer", "Hombre"
    public talla:String //"Unica","S","M","L","XL","XXL"
    constructor(titulo:string,
                precio:number, 
                descripcion:string,
                ubicacion:string,
                estado:string, 
                talla:string,
                evento?:string, 
                tipo?:string){
                    this.titulo = titulo;
                    this.precio = precio;
                    this.descripcion = descripcion;
                    this.ubicacion = ubicacion;
                    this.estado = estado;
                    this.talla = talla;
                    this.evento = evento;
                    this.tipo = tipo

    }


    
}
