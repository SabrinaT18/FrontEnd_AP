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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { InfoContactComponent } from './componentes/info-contact/info-contact.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PersonaService } from './servicios/persona.service';
import { SkillsService } from './servicios/skills.service';
import { ProyectosService } from './servicios/proyectos.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    EncabezadoComponent,
    PortfolioComponent,
    LoginComponent,
    ProyectosComponent,
    SkillsComponent,
    InfoContactComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}),
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
  ],

  providers: [
    AcercadeService,
    EducacionService,
    EncabezadoService,
    ExperienciaService,
    PersonaService,
    SkillsService,
    ProyectosService,
    AutenticacionService,
    InterceptorService, 
      {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}
    ],
    bootstrap: [AppComponent]
  })
export class AppModule { }
