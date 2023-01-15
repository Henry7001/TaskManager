import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    private dialogRef: MatDialogRef<AddTaskFormComponent>,
    private _snackBar: MatSnackBar
    ){}


  OnSubmit(){
    const newTask: Task = {
      titulo: this.registrarse.get('titulo')?.value!,
      descripcion: this.registrarse.get('descripcion')?.value!,
      fechaInicio: new Date(this.registrarse.get('fechaInicio')?.value!),
      fechaFin: new Date(this.registrarse.get('fechaFin')?.value!),
      estado: false,
    }

    
    if(newTask.fechaInicio < newTask.fechaFin){
      this.taskService.addTaskToActiveUser(newTask);
    }else{
      this._snackBar.open('La fecha de inicio debe ser menor a la fecha de fin', 'Cerrar',{
        duration: 2000,
      }
      );
    }
    this.dialogRef.close();

  }

}
