import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/LoginUsuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AutenticacionService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/portfolio'])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        
      })
  }























/* form: FormGroup;

  constructor
    (private formBuilder: FormBuilder,
      private authService: AutenticacionService,
      private router: Router,) {
      this.form = this.formBuilder.group({
        nombreUsuario: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(5)]],
      })
  }


  ngOnInit() {}

  get nombreUsuario() {
    return this.form.get('nombreUsuario')
  }

  get password() {
    return this.form.get('password');
  }

  onLogin(event: Event) {
    event.preventDefault;
    this.authService.login(this.form.value).subscribe(data => {
      console.log("DATA:" +JSON.stringify(data));
     this.router.navigate(['/portfolio']);
    });
  }
 */
}


 