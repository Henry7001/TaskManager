import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-edit-task',
  template: `<mat-icon color="accent" class="edit" (click)="onEdit($event)">edit</mat-icon>`,
  styles: [`
    .mat-icon {
      display: grid;
      font-size: 23px;
    }
    .edit{
      transition: .2s all !important;
    }
    .edit:hover {
      color: #FFF !important;
    }
  `]
})

export class EditTaskComponent{

  @Input() idTask: string | undefined;
  @Input() viewDialogTask: any | undefined;

  constructor(private dialog: MatDialog) {
  }

  onEdit(event: any): void {
    event.stopPropagation();
    if(this.viewDialogTask){
      this.viewDialogTask.close();
    }
    const dialogRef = this.dialog.open(TaskFormComponent, {
      data: {
        tipo: 'edit',
        idTask: this.idTask
     },
    });


    /*dialogRef.afterClosed().subscribe(() => {
      //console.log(this.sesionService.getActiveUser());

    });*/


  }

}
