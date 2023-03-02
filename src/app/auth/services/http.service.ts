import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHandler, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/auth/interface/user';


@Injectable({
  providedIn: 'root'
})
export class httpService {
  private apiUrl = 'https://localhost:7063';

  constructor(private http: HttpClient) { }

    login(correo: string, contraseña: string): Observable<any> {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Access-Control-Allow-Origin': '*'
          })
        };
        const url = `${this.apiUrl}/Auth/login?correo=${correo}&contrase%C3%B1a=${contraseña}`;
        console.log(url);
        return this.http.post(url, "", httpOptions);
    }

    register(usuario: User): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      const url = `${this.apiUrl}/Auth/crearUsuario?nombre=${usuario.nombre.toString()}&correo=${usuario.correo.toString()}&contrase%C3%B1a=${usuario.contraseña.toString()}`;
      console.log(url);
      return this.http.post(url, "", httpOptions);
    }
  
    
    
}
