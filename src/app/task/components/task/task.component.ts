import { Component, Input } from '@angular/core';
import { Task } from '../../interface/task';
import { MatDialog } from '@angular/material/dialog';
import { ViewTaskComponent } from '../../views/view-task/view-task.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: Task | undefined;

  constructor(private taskService: TaskService,private dialog: MatDialog) {
  }

  openTask() {
    const dialogRef = this.dialog.open(ViewTaskComponent, {
      data: { idTask: this.task?.id },
    });
  }

  formatTime(time: Date) {
    return new Date(time).toLocaleDateString("en-GB");
  }

  changeState(){
    this.taskService.changeState(this.task?.id)
  }
}
