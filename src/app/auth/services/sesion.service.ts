import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({ providedIn: 'root' })
export class SesionService {

  constructor() { }

  private users: User[]=[
    {
      nombre:'guillermo',
      correo: 'guiller.zeva@gmail.com',
      contraseña:'admin'
    },
    {
      nombre:'admin',
      correo: 'admin@gmail.com',
      contraseña:'admin'
    }
  ]

  private activeUser: User | undefined ;


  onNewUser(user: User):void{
    this.users.push(user);
    this.activeUser = user
  }

  login(nombre:string, contraseña: string):boolean{

    let valid = false;

    this.users.forEach((user)=> {
      if(user.nombre == nombre && user.contraseña == contraseña ){
        valid = true;
        this.activeUser = user
      }
    })

    return valid
  }

  logout():void{
    this.activeUser = undefined
  }

  isActiveUser():boolean{
    return !!this.activeUser;
  }

  getActiveUser():User | undefined{
    return this.activeUser;
  }

}
