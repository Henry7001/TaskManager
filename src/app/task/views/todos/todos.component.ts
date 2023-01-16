import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task.service';
import { SesionService } from 'src/app/auth/services/sesion.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  public tasks: Task[] | undefined = this.taskService.getTasks();

  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
    // this.tasks = this.sesionService.getActiveUser()?.tasks?.filter((task) => !task.estado)
  }


}
