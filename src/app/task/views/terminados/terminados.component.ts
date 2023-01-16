import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/auth/services/sesion.service';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.component.html',
  styleUrls: ['./terminados.component.css']
})
export class TerminadosComponent implements OnInit{

  public tasks: Task[] | undefined= this.taskService.getTerminados();

  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
  }


}
