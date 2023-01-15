import { Component } from '@angular/core';
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

export class EditTaskComponent {

  constructor(private dialog: MatDialog) { }

  onEdit(event: any): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(TaskFormComponent);
    console.log('edit');

    /*dialogRef.afterClosed().subscribe(() => {
      //console.log(this.sesionService.getActiveUser());

    });*/

  }

}
