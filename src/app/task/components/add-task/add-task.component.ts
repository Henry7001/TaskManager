import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SesionService } from 'src/app/auth/services/sesion.service';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-add-task',
  template: '<button mat-fab color="primary" (click)="addTask()"><mat-icon>library_add</mat-icon></button>',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private dialog: MatDialog){}

  addTask():void{
    //console.log('add task');
    const dialogRef = this.dialog.open(TaskFormComponent, {
      data: { tipo: 'add' },
    });

    dialogRef.afterClosed().subscribe(() => {
      //console.log(this.sesionService.getActiveUser());

    });
  }

}
