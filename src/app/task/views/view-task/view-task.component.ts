import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../interface/task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {
  constructor(
    private dialogRef: MatDialogRef<ViewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
}
