export class User {
    public id_user?:number;
    public photo?: string;
    public name?: string;
    public last_name?: string;
    public ubicacion?: string;
    public email?: string;
    public password?: string;

    constructor(id_user?:number,name?:string,last_name?:string,ubicacion?:string,email?:string,password?:string,photo?:string,){
        this.id_user  = id_user;
        this.name     = name;
        this.last_name= last_name;
        this.ubicacion= ubicacion;
        this.email    = email;
        this.photo    = photo;
        this.password = password;

    }
    public nombreCompleto():string{
        return this.name + " " + this.last_name
    }
}
