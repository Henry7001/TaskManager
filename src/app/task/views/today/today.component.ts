import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/task';
import { SesionService } from '../../../auth/services/sesion.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})

export class TodayComponent implements OnInit{
  public tasks: Task[] | undefined= this.taskService.getTodayTask();


  constructor(private taskService: TaskService){
  }


  ngOnInit(): void {
  }


}
