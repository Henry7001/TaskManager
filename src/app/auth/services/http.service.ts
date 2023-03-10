import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/auth/interface/user';
import { Task } from 'src/app/task/interface/task';


@Injectable({
  providedIn: 'root'
})
export class httpService {
  private apiUrl = 'https://localhost:7063';
  private httpOptions: Object = new Object();

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('sesion') as string)?.token}`
      })
    };
    console.log(this.httpOptions);

  }

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

      return this.http.post(`${this.apiUrl}/Task/crear`, {
        "id_usuario": id_usuario,
        "titulo": tarea.titulo,
        "descripcion": tarea.descripcion,
        "fechaFin": tarea.fechaFin,
        "fechaInicio": tarea.fechaInicio
      } , this.httpOptions);
    }

    editarTarea(tarea: Task, id_tarea: string): Observable<any> {

      return this.http.put(`${this.apiUrl}/Task/editar`, {
        "id": id_tarea,
        "titulo": tarea.titulo,
        "descripcion": tarea.descripcion,
        "fechaFin": tarea.fechaFin,
        "fechaInicio": tarea.fechaInicio,
        "estado": tarea.estado
      } , this.httpOptions);
    }

    EliminarTarea(id_tarea: string): Observable<any> {

      return this.http.delete(`${this.apiUrl}/Task/eliminar?id=${id_tarea}`, this.httpOptions);
    }

    getTareas(id_usuario: string): Observable<any> {

      return this.http.get(`${this.apiUrl}/Task/get?user_id=${id_usuario}`, this.httpOptions);
    }

}
