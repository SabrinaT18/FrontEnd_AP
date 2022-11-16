export class Encabezado {
    idH?: number;
    backImage: string;
    Linkedin:string;
    Facebook:string;
    Instagram:string;
   
   constructor (backImage: string, Linkedin:string, Facebook:string, Instagram:string) {
       this.backImage= backImage;
       this.Linkedin= Linkedin;
       this.Facebook= Facebook;
       this.Instagram= Instagram;
   }
}