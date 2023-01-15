import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { SesionService } from '../../auth/services/sesion.service';
import { User } from 'src/app/auth/interface/user';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private user: User | undefined;
  constructor(private sesionService: SesionService) {
    this.user = this.sesionService.getActiveUser();
  }

  addTaskToActiveUser(task: Task): void {
    if (this.sesionService.getActiveUser()) {
      task['id'] = uuidv4();
      this.user!.tasks?.push(task);
    }
  }

  getTasks(){
    return this.user!.tasks;
  }

  getTaskToById(id: string) {
    let t: Task | undefined;
    let tasks = this.user!.tasks;
    tasks!.forEach((task) => {
      if(task.id === id){
        t = task
      }
    })
    return t
  }

  editTask(id: string, options: Task) {

    let tasks = this.user!.tasks;
    tasks!.forEach((task,indx) => {
      if(task.id === id){
        console.log(task , options);
        tasks![indx] = {...options}
      }
    })
  }

}
