export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    company: String;
  
    
   constructor (nombre: String, apellido: String, img:String , company:String ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.company = company;
}
 }