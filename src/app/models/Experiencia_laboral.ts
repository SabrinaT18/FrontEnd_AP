export class experiencia_laboral {
    idExp: number;
    nombreEmpresa: String;
    descripcion: String;
    fechaInicio:Date;
    fechaFin: Date;
    esTrabajoActual:String;
    tipo_empleo: String;
    
    
    constructor (idExp: number, 
      nombreEmpresa: String, descripcion: String, fechaInicio:Date, 
      fechaFin: Date, esTrabajoActual:String, tipo_empleo: String) {
      this.idExp =idExp;
        this.nombreEmpresa = nombreEmpresa;
       this.descripcion = descripcion;
       this.fechaInicio = fechaInicio;
       this.fechaFin = fechaFin;
       this.esTrabajoActual = esTrabajoActual;
       this.tipo_empleo = tipo_empleo;
    }
    
    }

