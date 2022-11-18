export class InformaciondeContacto {
    idCont?: number;
    email: String;
    telefono: String;
    dni: String;
    domicilio: String;
   
   constructor (email: String, telefono: String,
    dni: String, domicilio: String ) {
       this.email = email;
       this.telefono = telefono;
       this.dni = dni;
       this.domicilio = domicilio;
   }
   
}