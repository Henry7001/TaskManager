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

    login(correo: string, contrasena: string): Observable<any> {
        const url = `${this.apiUrl}/Auth/login`;
        const body = { correo, contrasena };
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Access-Control-Allow-Origin': '*'
          })
        };
        return this.http.post(url, body, httpOptions);
    }

    register(usuario: User): Observable<any> {
      const url = `${this.apiUrl}/Auth/crearUsuario`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      const body = {
        nombre: usuario.nombre.toString(),
        correo: usuario.correo.toString(),
        contraseña: usuario.contraseña.toString()
      }
      console.log(body);
      return this.http.post(url, body, httpOptions);
    }
  
    
    
}
