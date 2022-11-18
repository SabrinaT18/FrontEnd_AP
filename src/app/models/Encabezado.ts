export class Encabezado {
    idH: number;
    backImage: string;
    linkedin: string;
    facebook: string;
    instagram: string;

    constructor(idH: number,
        backImage: string, linkedin: string, facebook: string, instagram: string) {
        this.idH = idH;
        this.backImage = backImage;
        this.linkedin = linkedin;
        this.facebook = facebook;
        this.instagram = instagram;
    }
}