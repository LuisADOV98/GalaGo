export class User {
    public iduser?: number;
    public photo?: string;
    public firstname?: string;
    public surname?: string;
    public location?: string; 
    public email?: string;
    public password?: string;

    constructor(firstname: string, surname: string, ubicacion: string, email: string, password: string, photo?: string,iduser?: number) {
        this.iduser = iduser;
        this.firstname = firstname;
        this.surname = surname;
        this.location = ubicacion;
        this.email = email;
        this.photo = photo;
        this.password = password;

    }
    public nombreCompleto(): string {
        return this.firstname + " " + this.surname
    }
}
