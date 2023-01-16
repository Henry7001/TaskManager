import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {

  public task: Task | undefined = this.taskService.getTaskToById(this.data.idTask);

  constructor(
    private taskService: TaskService,
    public dialogRef: MatDialogRef<ViewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  formatTime(time: Date) {
    return new Date(time).toLocaleDateString("en-GB");
  }

  formatEstado(estado: boolean) {
    if (estado) {
      return "Completado";
    } else {
      return "Sin completar";
    }
  }

  closeDialog(){
    return this.dialogRef
  }
}
