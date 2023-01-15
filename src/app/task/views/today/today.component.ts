import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/task';
import { SesionService } from '../../../auth/services/sesion.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})

export class TodayComponent implements OnInit{
  public tasks: Task[] | undefined= this.sesionService.getActiveUser()?.tasks;
  public hoy = this.formatTime(new Date());
  public today: Task[] | undefined= this.tasks?.filter(task => this.formatTime(task.fechaInicio) === this.hoy);
  constructor(private sesionService: SesionService){
  }
  ngOnInit(): void {
    this.tasks = this.sesionService.getActiveUser()?.tasks;
    this.today = this.tasks?.filter(task => this.formatTime(task.fechaInicio) === this.hoy);
    console.log(this.today);
  }  

  formatTime(time: Date) {
    return new Date(time).toLocaleDateString("en-GB");
  }

}
  