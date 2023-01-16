import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/auth/services/sesion.service';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-proximos',
  templateUrl: './proximos.component.html',
  styleUrls: ['./proximos.component.css']
})
export class ProximosComponent implements OnInit{

  public tasks: Task[] | undefined = this.taskService.getProximos();

  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
  }


}
