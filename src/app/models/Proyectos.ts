export class proyectos {
    idPro?: number;
    proyectosName: String;
    describeProyect: String;
    fechaProyecto:String;

   
   constructor (proyectosName: String, describeProyect: String, fechaProyecto:String ) {
       this.proyectosName = proyectosName;
       this.describeProyect = describeProyect;
       this.fechaProyecto = fechaProyecto;
       
   }
   
   }