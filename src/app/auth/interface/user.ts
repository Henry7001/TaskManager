import { Task } from '../../task/interface/task';
export interface User {
  nombre: string,
  contraseña: string,
  correo: string,
  tasks?: Task[]
}
