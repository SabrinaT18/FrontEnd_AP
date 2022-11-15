import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './componentes/acercade/acercade/acercade.component';
import { EducacionComponent } from './componentes/educacion/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia/experiencia.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado/encabezado.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EducacionService } from './servicios/educacion.service';
import { AcercadeService } from './servicios/acercade.service';
import { EncabezadoService } from './servicios/encabezado.service';
import { ExperienciaService } from './servicios/experiencia.service';

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    EncabezadoComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AcercadeService,
    EducacionService,
    EncabezadoService,
    ExperienciaService,
  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
