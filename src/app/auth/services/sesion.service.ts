import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Task } from '../../task/interface/task';

@Injectable({ providedIn: 'root' })
export class SesionService {

  constructor() { }

  private users: User[]=[
    {
      nombre:'guillermo',
      correo: 'guiller.zeva@gmail.com',
      contraseña:'admin',
      tasks: []
    },
    {
      nombre:'admin',
      correo: 'admin@gmail.com',
      contraseña:'admin',
      tasks: []
    }
  ]

  private activeUser: User | undefined ;

  initSessionStorage():void{
    this.activeUser = JSON.parse(sessionStorage.getItem('sesion') as string);
    //console.log(this.activeUser);

  }

  onNewUser(user: User):void{
    this.users.push(user);
    this.activeUser = user
    sessionStorage.setItem('sesion', JSON.stringify(user));
  }

  login(nombre:string, contraseña: string):boolean{

    let valid = false;

    this.users.forEach((user)=> {
      if(user.nombre == nombre && user.contraseña == contraseña ){
        valid = true;
        this.activeUser = user
        sessionStorage.setItem('sesion', JSON.stringify(user));
      }
    })

    return valid
  }

  logout():void{
    this.activeUser = undefined;
    sessionStorage.removeItem('sesion')
  }

  isActiveUser():boolean{
    return !!this.activeUser;
  }

  getActiveUser():User | undefined{
    return this.activeUser;
  }

}
