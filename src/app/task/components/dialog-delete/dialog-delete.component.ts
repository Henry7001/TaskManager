import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'dialog-delete',
  template: `
    <section>
      <h5 mat-dialog-title>Eliminar</h5>
      <div mat-dialog-content>
        Esta seguro que quiere eliminar esta tarea?
      </div>
      <div mat-dialog-actions>
        <button mat-dialog-close (click)="close()">No</button>
        <button mat-dialog-close (click)="deletefile()">Ok</button>
      </div>
    </section>
  `,
  styles: [`
    section{
      padding: 1rem 1rem 0;
    }
    button {
      border-radius: 0;
      margin: 1rem;
      margin-left: 0;
    }
  `]
})
export class DialogDeleteComponent {
  constructor(
    private taskService: TaskService,
    private dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  deletefile(){
    this.taskService.removeTask(this.data.idTask)
    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }

}
