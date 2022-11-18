export class proyectos {
    idPro: number;
    proyectosName: String;
    describeProyect: String;
    fechaProyecto: Date;


    constructor(idPro: number, proyectosName: String, describeProyect: String, fechaProyecto: Date) {
        this.idPro = idPro;
        this.proyectosName = proyectosName;
        this.describeProyect = describeProyect;
        this.fechaProyecto = fechaProyecto;

    }

}