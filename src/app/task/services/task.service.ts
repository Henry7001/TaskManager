import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { SesionService } from '../../auth/services/sesion.service';

@Injectable({providedIn: 'root'})
export class TaskService {
  constructor(private sesionService: SesionService) { }

  addTaskToActiveUser(task:Task):void{
    if(this.sesionService.getActiveUser()){
      let user = this.sesionService.getActiveUser();
      user!.tasks?.push(task);
    }
  }

}
