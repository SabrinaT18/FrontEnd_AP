export class educacion {
    idEd: number;
    schoolName: String;
    titulo: String;
    fechaInicio: Date;
    fechaFin: Date;
    promedio: String;
    tipo_estudio: String;


    constructor(idEd: number, schoolName: String, titulo: String, fechaInicio: Date, fechaFin: Date, promedio: String, tipo_estudio: String) {
        this.idEd = idEd;
        this.schoolName = schoolName;
        this.titulo = titulo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.promedio = promedio;
        this.tipo_estudio = tipo_estudio;
    }
}