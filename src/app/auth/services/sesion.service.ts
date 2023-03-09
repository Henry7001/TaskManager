import { Injectable } from '@angular/core';
import { ActiveUser, User } from '../interface/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { httpService } from './http.service';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class SesionService implements CanActivate {

  loginEvent = new Subject<void>();

  constructor(private _snackBar: MatSnackBar, private router: Router, private api: httpService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.activeUser) {
      this.router.navigate(['/'])
    }

    return true
  }

  private users: User[] = [
    {
      nombre: 'guillermo',
      correo: 'guiller.zeva@gmail.com',
      contraseña: 'admin',
      tasks: [
        {
          id: '33vcvcvc',
          titulo: 'Realizar tarea de matemacica',
          descripcion: 'tabla de multiplicas del 30',
          fechaFin: new Date(),
          fechaInicio: new Date(),
          estado: true,
        }
      ]
    }
  ]

  private activeUser: ActiveUser | undefined;

  initLocalStorage(): void {
    this.activeUser = JSON.parse(localStorage.getItem('sesion') as string);
    //console.log(this.activeUser);

  }

  onNewUser(user: User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.api.register(user).subscribe(
        (data: any) => {
          this.activeUser = { nombre: data.nombre, uid: data.uid, token: data.token };
          localStorage.setItem('sesion', JSON.stringify(this.activeUser));
          this.loginEvent.next();
          resolve(true); // Resolver la promesa con true
        },
        (error: any) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.detail || 'parace que hubo un error...',
          })
          reject(false); // Rechazar la promesa con false
        }
      )
    });
  }


  login(correo: string, contraseña: string):  Promise<boolean>  {

    return new Promise((resolve, reject) => {
      this.api.login(correo, contraseña).subscribe(
        (data: any) => {
          // this.activeUser = user;
          console.log(data);
          this.activeUser = { nombre: data.nombre, uid: data.uid, token: data.token };
          localStorage.setItem('sesion', JSON.stringify(this.activeUser));
          this.loginEvent.next();
          resolve(true); // Resolver la promesa con true
        },
        (error: any) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.detail || 'parace que hubo un error...',
          })
          reject(false); // Rechazar la promesa con false
        }
      )
    });
  }

  logout(): void {
    this.activeUser = undefined;
    localStorage.removeItem('sesion')
  }

  isActiveUser(): boolean {
    return !!this.activeUser;
  }

  getActiveUser(): ActiveUser | undefined {
    return this.activeUser;
  }

}
