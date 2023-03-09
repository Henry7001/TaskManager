import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHandler, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/auth/interface/user';
import { Task } from 'src/app/task/interface/task';


@Injectable({
  providedIn: 'root'
})
export class httpService {
  private apiUrl = 'https://localhost:7063';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

    login(correo: string, contraseña: string): Observable<any> {

      return this.http.post(`${this.apiUrl}/Auth/login`, {
        "correo": correo,
        "contraseña": contraseña
      }, this.httpOptions);
    }

    register(usuario: User): Observable<any> {

      return this.http.post(`${this.apiUrl}/Auth/crear`, {
        "nombre": usuario.nombre,
        "correo": usuario.correo,
        "contraseña": usuario.contraseña
      }, this.httpOptions);
    }

    creaTarea(tarea: Task, id_usuario: string): Observable<any> {

      const url = `${this.apiUrl}/Auth/crearUsuario?id_usuario=${id_usuario}&titulo=${tarea.titulo.toString()}&descripcion=${tarea.descripcion.toString()}&fecha_fin=${tarea.fechaFin.toString()}&fecha_inicio=${tarea.fechaInicio.toString()}&estado=${tarea.estado.toString()}`
      console.log(url);
      return this.http.post(url, "", this.httpOptions);
    }



}
