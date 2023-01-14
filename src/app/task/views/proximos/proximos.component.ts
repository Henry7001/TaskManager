import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/auth/services/sesion.service';
import { Task } from '../../interface/task';

@Component({
  selector: 'app-proximos',
  templateUrl: './proximos.component.html',
  styleUrls: ['./proximos.component.css']
})
export class ProximosComponent implements OnInit{

  public tasks: Task[] | undefined= this.sesionService.getActiveUser()?.tasks;

  // public proximos: Task[] | undefined

  constructor(private sesionService: SesionService){
    console.log(this.tasks);
  }

  ngOnInit(): void {
    this.tasks = this.sesionService.getActiveUser()?.tasks
  }
}
