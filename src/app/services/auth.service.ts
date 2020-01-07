import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = environment.apikey;

  userToken: string;

 /*  signUp?key=[API_KEY] */

/*  signInWithPassword?key=[API_KEY] */

  constructor( private http: HttpClient) {
    this.leerToken();
  }

  logout() {

  }

  acceder( usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }signInWithPassword?key=${ this.apiKey }`,
      authData
    ).pipe(
      map( resp => {
        console.log('Entró en el mapa');
        // tslint:disable-next-line:no-string-literal
        this.guardarToken( resp['idToken']);
        return resp;
      })
    );
  }

  nuevoUsuario( usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }signUp?key=${ this.apiKey }`,
      authData
    ).pipe(
      map( resp => {
        console.log('Entró en el mapa');
        // tslint:disable-next-line:no-string-literal
        this.guardarToken( resp['idToken']);
        return resp;
      })
    );
  }

  private guardarToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken() {
    if ( localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }
}
