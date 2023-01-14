import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-task',
  template: `<mat-icon (click)="onEdit($event)">edit</mat-icon>`,
  styles: [`
    .mat-icon {
      display: grid;
      font-size: 23px;
    }
  `]
})
export class EditTaskComponent {

  onEdit(event: any):void{
    event.stopPropagation();
    console.log('edit');
  }

}
