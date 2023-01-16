import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-delete-task',
  template: `<mat-icon class="delete" (click)="onDelete($event)">delete_outlin</mat-icon>`,
  styles: [`
    .mat-icon {
      display: grid;
      font-size: 25px;
    }
    .delete{
      color: #212121 !important;
      transition: .2s all !important;
    }
    .delete:hover {
      color: #FFF !important;
    }
  `]
})
export class DeleteTaskComponent {

  @Input() idTask: string | undefined;

  constructor(private dialog: MatDialog){

  }

  onDelete(event:any):void{
    event.stopPropagation();
    console.log('delte');
    // this.TaskService.removeTask(this.idTask);


    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: {
        idTask: this.idTask
     },
    });

  }

}
