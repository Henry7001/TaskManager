import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {


  registrarse = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    fechaInicio: new FormControl('', [Validators.required]),
    fechaFin: new FormControl('', [Validators.required])
  })


  constructor(
    private taskService: TaskService,
    private dialogRef: MatDialogRef<AddTaskFormComponent>){}


  OnSubmit(){
    const newTask: Task = {
      titulo: this.registrarse.get('titulo')?.value!,
      descripcion: this.registrarse.get('descripcion')?.value!,
      fechaInicio: new Date(this.registrarse.get('fechaInicio')?.value!),
      fechaFin: new Date(this.registrarse.get('fechaFin')?.value!),
      estado: false,
    }

    this.taskService.addTaskToActiveUser(newTask);
    this.dialogRef.close();

  }

}
