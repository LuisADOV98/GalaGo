export class Propietarioprenda {
    constructor(
        public iduser?: number,
        public idprenda?: number,
        public firstname?:string,
        public photo?:string,
        ){

        this.iduser= iduser;
        this.idprenda = idprenda;
        this.firstname = firstname;
        this.photo = photo;
        }
}

