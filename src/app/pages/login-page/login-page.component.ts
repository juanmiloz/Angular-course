import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');

    if (token) {
      this.router.navigate(['home'])
    }
  }

  loginUser() {
    if (this.email !== '' && this.password  !== '') {
      this.authService.login(this.email, this.password).subscribe(
        (res) => {
          if (res.token) {
            sessionStorage.setItem('token', res.token);
            this.router.navigate(['home'])
          }
        },
        (error) => {
          console.error(`Ha habido un error al hacer el login: ${error}`)
        },
        () => console.info('Peticion de login terminado')
      )
    } else {
      alert("Debe llenar los campos para poder loguearse")
    }
  }
}
