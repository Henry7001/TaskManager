import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { SesionService } from '../../auth/services/sesion.service';
import { User } from 'src/app/auth/interface/user';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private user: User | undefined;
  private allTask: Task[] | undefined;


  constructor(private sesionService: SesionService) {
    this.user = this.sesionService.getActiveUser();
    this.allTask = this.user?.tasks?.filter((task) => !task.estado)
  }

  addTaskToActiveUser(task: Task): void {
    if (this.sesionService.getActiveUser()) {
      task['id'] = uuidv4();
      this.user!.tasks?.push(task);
    }
  }

  getTasks() {
    return this.user?.tasks;
  }

  getTodayTask() {
    const formatTime = (time: Date) => {
      return new Date(time).toLocaleDateString("en-GB");
    }

    let hoy = formatTime(new Date());

    return this.user?.tasks?.filter(task => formatTime(task.fechaInicio) === hoy || formatTime(task.fechaFin) === hoy)
      .filter(task => !task.estado);
  }

  getTerminados() {
    return this.user?.tasks?.filter(task => task.estado);
  }

  getProximos() {
    let today = new Date();
    let nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    return this.user?.tasks?.filter(task => !task.estado)
      .filter(task => {
        console.log();
        if (new Date(task.fechaInicio) > today &&
          new Date(task.fechaFin) <= nextWeek
        ) {
          return task;
        }
        return;
      });
  }

  getTaskToById(id: string) {
    let t: Task | undefined;
    let tasks = this.user!.tasks;
    tasks!.forEach((task) => {
      if (task.id === id) {
        t = task
      }
    })
    return t
  }

  editTask(id: string, options: Task) {

    let tasks = this.user!.tasks;
    tasks!.forEach((task, indx) => {
      if (task.id === id) {
        tasks![indx] = { ...options }
      }
    })
  }

  changeState(id: string = '') {

    let tasks = this.user!.tasks;
    tasks!.forEach((task, indx) => {
      if (task.id === id) {
        tasks![indx].estado = !tasks![indx].estado
      }
    })
  }

}
