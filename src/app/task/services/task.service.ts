import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { SesionService } from '../../auth/services/sesion.service';
import { ActiveUser, User } from 'src/app/auth/interface/user';
import { httpService } from 'src/app/auth/services/http.service';
import Swal from 'sweetalert2';
import  confetti  from 'canvas-confetti';

@Injectable({ providedIn: 'root' })
export class TaskService {
  public loading: boolean = false;
  private user: ActiveUser | undefined;
  private allTask: Task[] | undefined = [];
  private todayTask: Task[] | undefined;
  private terminadosTask: Task[] | undefined;
  private proximosTask: Task[] | undefined;


  constructor(private sesionService: SesionService, private api: httpService) {
    this.user = this.sesionService.getActiveUser();
    console.log(this.user);

    this.sesionService.loginEvent.subscribe(() => this.update());
    this.update();
  }

  update() {

    if(this.user){
      this.loading = true;
      this.api.getTareas(this.user?.uid).subscribe(
        (data: any)=>{
          let tasks: Task[] = data.result;
          this.allTask = tasks?.filter((task) => !task.estado);
          this.terminadosTask = tasks?.filter(task => task.estado);
          this.setTodayTask();
          this.setProximosTask();
          this.loading = false;
        },
        (error: any) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error?.error?.detail || 'parace que hubo un error...',
          })
        }
      )
    }
  }

  setTodayTask() {
    const formatTime = (time: Date) => {
      return new Date(time).toLocaleDateString("en-GB");
    }

    let hoy = formatTime(new Date());

    var colors = ['#000000', '#6c63ff'];
    if(this.allTask?.length == 0){
      confetti({
        zIndex: 1111,
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        zIndex:1111,
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    }

    this.todayTask = this.allTask?.filter(task => formatTime(task.fechaInicio) === hoy || formatTime(task.fechaFin) === hoy)
       .filter(task => !task.estado);
  }

  setProximosTask() {
    let today = new Date();
    let nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    this.proximosTask = this.allTask?.filter(task => !task.estado)
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
    let tasks = this.allTask;
    tasks!.forEach((task) => {
      if (task.id === id) {
        t = task
      }
    })
    return t
  }

  addTaskToActiveUser(task: Task): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.user) {

        this.api.creaTarea(task, this.user?.uid).subscribe(
          (data: any)=>{
            console.log(data);
            this.allTask?.push(task)
            this.update();
            resolve(true);
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
      }
    });
  }

  editTask(id: string, options: Task): Promise<boolean> {

    return new Promise((resolve, reject) => {
      if (this.user) {

        this.api.editarTarea(options, id).subscribe(
          (data: any)=>{
            console.log(data);
            this.update();
            resolve(true);
          },
          (error: any) => {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error?.detail || 'parace que hubo un error...',
            })
            reject(false);// Rechazar la promesa con false
          }
        )
      }
    });

  }

  removeTask(id: string = ''){
    this.api.EliminarTarea( id).subscribe(
      (data: any)=>{
        console.log(data);
        this.update();
      },
      (error: any) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error?.detail || 'parace que hubo un error...',
        })// Rechazar la promesa con false
      }
    )
  }

  changeState(task: Task ) {

    task.estado = !task.estado;

    this.editTask(task.id, task);

  }

}

