import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/auth/services/sesion.service';
import { Task } from '../../interface/task';

@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.component.html',
  styleUrls: ['./terminados.component.css']
})
export class TerminadosComponent implements OnInit{

  public tasks: Task[] | undefined= this.sesionService.getActiveUser()?.tasks;

  // public terminados: Task[] | undefined

  constructor(private sesionService: SesionService){
    console.log(this.tasks);
  }

  ngOnInit(): void {
    this.tasks = this.sesionService.getActiveUser()?.tasks
  }
}
