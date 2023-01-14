import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-task',
  template: `<mat-icon (click)="onDelete($event)">delete_outlin</mat-icon>`,
  styles: [`
    .mat-icon {
      display: grid;
      font-size: 25px;
    }
  `]
})
export class DeleteTaskComponent {

  onDelete(event:any):void{
    event.stopPropagation();
    console.log('delte');
  }

}
