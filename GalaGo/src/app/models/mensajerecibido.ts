export class Mensajerecibido {
        constructor(
                    public receptor:string,
                    public contenido_recibido: string,
                    ){
            
                    this.receptor=receptor;
                    this.contenido_recibido = contenido_recibido;      
                    }
        }