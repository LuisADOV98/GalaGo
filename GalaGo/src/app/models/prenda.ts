export class Prenda {
    public titulo: String;
    public precio: number;
    public descripcion: String; 
    public ubicacion: String;
    public estado: String;
    public evento: String;
    public mujer: Boolean;
    public hombre: Boolean;
    public accesorio: Boolean;
    

    constructor(titulo:String,
                precio:number, 
                descripcion:String,
                ubicacion:String,
                estado:String, 
                evento?:String, 
                mujer?:Boolean, 
                hombre?:boolean, 
                accesorio?:boolean ){

                    this.titulo = titulo;
                    this.precio = precio;
                    this.descripcion = descripcion;
                    this.ubicacion = ubicacion;
                    this.estado = estado;
                    this.evento = evento;
                    this.mujer = mujer;
                    this.hombre = hombre;
                    this.accesorio = accesorio;

    }


    
}
