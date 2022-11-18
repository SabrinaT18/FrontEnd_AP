export class proyectos {
    idPro: number;
    proyectosName: String;
    describeProyect: String;
    fechaProyecto:String;

   
   constructor ( idPro:number ,
    proyectosName: String, describeProyect: String, fechaProyecto:String ) {
        this.idPro = idPro;
        this.proyectosName = proyectosName;
       this.describeProyect = describeProyect;
       this.fechaProyecto = fechaProyecto;
       
   }
   
   }