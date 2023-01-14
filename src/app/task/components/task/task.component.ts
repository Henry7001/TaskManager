import { Component, Input } from '@angular/core';
import { Task } from '../../interface/task';
import { MatDialog } from '@angular/material/dialog';
import { ViewTaskComponent } from '../../views/view-task/view-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: Task | undefined;

  constructor(private dialog: MatDialog) {}

  openTask(){
    const dialogRef = this.dialog.open(ViewTaskComponent, {
      data: { task: this.task },
    });
  }

}
