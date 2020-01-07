import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(  private auth: AuthService,
                private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm) {
    if ( form.invalid ) { return; }
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor'
    });
    Swal.showLoading();
    this.auth.nuevoUsuario( this.usuario )
    .subscribe( resp => {
      console.log( resp );
      Swal.close();
      this.router.navigateByUrl('/home');
    }, err => {
      console.log(err.error.error.message);
      Swal.fire({
        type: 'error',
        title: 'Error al crear usuario',
        text: err.error.error.message
      });
    });
  }

}
