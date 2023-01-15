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
  public hoy = new Date();
  public today: Task[] | undefined;
  constructor(private sesionService: SesionService){
    console.log(this.tasks);
  }
  ngOnInit(): void {
    this.tasks = this.sesionService.getActiveUser()?.tasks;
    this.today = this.tasks?.filter(task => task.fechaInicio === this.hoy);
  }  
}
  