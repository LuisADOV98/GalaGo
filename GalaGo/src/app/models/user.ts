export class User {
    public id_user?: number;
    public photo?: string;
    public firstname?: string;
    public surname?: string;
    public ubicacion?: string;
    public email?: string;
    public password?: string;

    constructor(firstname: string, surname: string, ubicacion: string, email: string, password: string, photo?: string,id_user?: number) {
        this.id_user = id_user;
        this.firstname = firstname;
        this.surname = surname;
        this.ubicacion = ubicacion;
        this.email = email;
        this.photo = photo;
        this.password = password;

    }
    public nombreCompleto(): string {
        return this.firstname + " " + this.surname
    }
}
