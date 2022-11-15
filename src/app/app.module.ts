import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { LoginComponent } from './componentes/login/login/login.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    EncabezadoComponent,
    PortfolioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],

  providers: [
    AcercadeService,
    EducacionService,
    EncabezadoService,
    ExperienciaService,
    AutenticacionService,
    InterceptorService 
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
