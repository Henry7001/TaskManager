import { Component } from '@angular/core';
import { SesionService } from 'src/app/auth/services/sesion.service';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showFiller = false;

  constructor(public taskService: TaskService) {
  }


}

