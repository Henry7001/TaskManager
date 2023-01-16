import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.component.html',
  styleUrls: ['./terminados.component.css']
})
export class TerminadosComponent {


  constructor(public taskService: TaskService) {

  }



}
