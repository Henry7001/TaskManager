import { Component } from '@angular/core';

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

  onDelete(event:any):void{
    event.stopPropagation();
    console.log('delte');
  }

}
