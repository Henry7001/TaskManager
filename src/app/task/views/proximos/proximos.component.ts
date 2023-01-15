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
  public nextWeek = new Date();
  public nextWeekString : any;
  public todayString = this.nextWeek.toLocaleDateString('en-GB');
  public proximos: Task[] | undefined;
  constructor(private sesionService: SesionService){
    
  }

  ngOnInit(): void {
    this.tasks = this.sesionService.getActiveUser()?.tasks;
    this.nextWeek.setDate(this.nextWeek.getDate() + 7);
    this.nextWeekString= this.nextWeek.toLocaleDateString('en-GB');
    this.proximos = this.tasks?.filter(task => task.fechaInicio.toLocaleDateString('en-GB') === this.todayString);
    console.log(this.proximos);
  }
  

}
