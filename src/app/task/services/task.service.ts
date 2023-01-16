import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { SesionService } from '../../auth/services/sesion.service';
import { User } from 'src/app/auth/interface/user';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private user: User | undefined;
  private allTask: Task[] | undefined;
  private todayTask: Task[] | undefined;
  private terminadosTask: Task[] | undefined;
  private proximosTask: Task[] | undefined;


  constructor(private sesionService: SesionService) {
    this.user = this.sesionService.getActiveUser();
    this.sesionService.loginEvent.subscribe(() => this.update());
    this.update();
  }

  update() {
    this.user = this.sesionService.getActiveUser();
    this.allTask = this.user?.tasks?.filter((task) => !task.estado);
    this.terminadosTask = this.user?.tasks?.filter(task => task.estado);
    this.setTodayTask();
    this.setProximosTask();
  }

  setTodayTask() {
    const formatTime = (time: Date) => {
      return new Date(time).toLocaleDateString("en-GB");
    }

    let hoy = formatTime(new Date());

    this.todayTask = this.user?.tasks?.filter(task => formatTime(task.fechaInicio) === hoy || formatTime(task.fechaFin) === hoy)
      .filter(task => !task.estado);
  }

  setProximosTask() {
    let today = new Date();
    let nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    this.proximosTask = this.user?.tasks?.filter(task => !task.estado)
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

  getTasks() {
    return this.allTask;
  }

  getTodayTask() {
    return this.todayTask;
  }

  getTerminados() {
    return this.terminadosTask;
  }

  getProximos() {
    return this.proximosTask;
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

  addTaskToActiveUser(task: Task): void {
    if (this.sesionService.getActiveUser()) {
      task['id'] = uuidv4();
      this.user!.tasks?.push(task);
    }
    this.update();
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
    this.update();
  }

}
