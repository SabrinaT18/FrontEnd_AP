export class experiencia_laboral {
    idExp?: number;
    nombreEmpresa: String;
    descripción: String;
    fechaInicio:String;
    fechaFin: String;
    esTrabajoActual:String;
    tipo_empleo: String;
descripcion: any;
    
    
    constructor (nombreEmpresa: String, descripcion: String, fechaInicio:String, 
      fechaFin: String, esTrabajoActual:String, tipo_empleo: String) {
       this.nombreEmpresa = nombreEmpresa;
       this.descripción = descripcion;
       this.fechaInicio = fechaInicio;
       this.fechaFin = fechaFin;
       this.esTrabajoActual = esTrabajoActual;
       this.tipo_empleo = tipo_empleo;
    }
    
    }

