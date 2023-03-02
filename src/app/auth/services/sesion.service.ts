import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SesionService implements CanActivate {

  loginEvent = new Subject<void>();

  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(!this.activeUser){
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

  private activeUser: User | undefined;

  initLocalStorage(): void {
    this.activeUser = JSON.parse(localStorage.getItem('sesion') as string);
    //console.log(this.activeUser);

  }

  onNewUser(user: User): void {
    this.users.push(user);
    this.activeUser = user
    localStorage.setItem('sesion', JSON.stringify(user));
    this.loginEvent.next();
  }

  login(nombre: string, contraseña: string): boolean {

    let valid = false;

    this.users.forEach((user) => {
      if (user.nombre == nombre && user.contraseña == contraseña) {
        valid = true;
        this.activeUser = user
        localStorage.setItem('sesion', JSON.stringify(user));
      }else{
        this._snackBar.open('Cedenciales inválidas.', 'Cerrar',{
          duration: 2000,
        }
        );
      }
    })
    this.loginEvent.next();
    return valid
  }

  logout(): void {
    this.activeUser = undefined;
    localStorage.removeItem('sesion')
  }

  isActiveUser(): boolean {
    return !!this.activeUser;
  }

  getActiveUser(): User | undefined {
    return this.activeUser;
  }

}
