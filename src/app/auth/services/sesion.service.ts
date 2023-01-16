import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Task } from '../../task/interface/task';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SesionService implements CanActivate {

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
        },
        {
          id: '33nbnbn',
          titulo: 'Crear sitio web',
          descripcion: 'Crear sitio web para el marte',
          fechaFin: new Date(),
          fechaInicio: new Date(),
          estado: false
        },
        {
          id: '33iuiui',
          titulo: 'Hacer ejercicio',
          descripcion: 'Ir al gym',
          fechaFin: new Date(),
          fechaInicio: new Date(),
          estado: false
        },
        {
          id: '33gfgfh',
          titulo: 'Realizar tarea de matemacica',
          descripcion: 'tabla de multiplicas del 30',
          fechaFin: new Date(),
          fechaInicio: new Date(),
          estado: false
        },
        {
          id: '33wqwqwq',
          titulo: 'Crear sitio web',
          descripcion: 'Crear sitio web para el marte',
          fechaFin: new Date(),
          fechaInicio: new Date(),
          estado: false
        },
        {
          id: '33rerer',
          titulo: 'Hacer ejercicio',
          descripcion: 'Ir al gym',
          fechaFin: new Date(),
          fechaInicio: new Date(),
          estado: false
        },
        {
          id: '33fgfgfg',
          titulo: 'Hacer ejercicio',
          descripcion: 'Ir al gym',
          fechaFin: new Date(),
          fechaInicio: new Date(),
          estado: false
        },
        {
          id: '33dsdas',
          titulo: 'Realizar tarea de matemacica',
          descripcion: 'tabla de multiplicas del 30',
          fechaFin: new Date(),
          fechaInicio: new Date(),
          estado: false
        },
        {
          id: '33Crear',
          titulo: 'Crear sitio web',
          descripcion: 'Crear sitio web para el marte',
          fechaFin: new Date(),
          fechaInicio: new Date(),
          estado: false
        },
        {
          id: '33Hacer ejercicio',
          titulo: 'Hacer ejercicio',
          descripcion: 'Ir al gym',
          fechaFin: new Date(),
          fechaInicio: new Date(),
          estado: false
        }
      ]
    },
    {
      nombre: 'admin',
      correo: 'admin@gmail.com',
      contraseña: 'admin',
      tasks: []
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
