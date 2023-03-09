import { v4 as uuidv4 } from 'uuid';
import { Component, Input, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../interface/task';
import { TaskService } from '../../services/task.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'add-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  private idTask: string = '';
  public tipo: 'add' | 'edit' = 'add';
  public loadingD: boolean = false;

  registrarse : FormGroup;


  constructor(
    private taskService: TaskService,
    private dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
    ){
      this.tipo = data.tipo;
      this.idTask = data.idTask? data.idTask : uuidv4();

      let task = this.taskService.getTaskToById(this.idTask);

      this.registrarse = new FormGroup({
        titulo: new FormControl(task?.titulo || '', [Validators.required]),
        descripcion: new FormControl(task?.descripcion || '', [Validators.required]),
        fechaInicio: new FormControl(task?.fechaInicio || '', [Validators.required]),
        fechaFin: new FormControl(task?.fechaFin || '', [Validators.required])
      })

    }


  async OnSubmit(){
    this.loadingD = true;

    let state:boolean = false;

    const task: Task = {
      id: this.idTask,
      titulo: this.registrarse.get('titulo')?.value!,
      descripcion: this.registrarse.get('descripcion')?.value!,
      fechaInicio: new Date(this.registrarse.get('fechaInicio')?.value!),
      fechaFin: new Date(this.registrarse.get('fechaFin')?.value!),
      estado: false,
    }

    if(task.fechaInicio < task.fechaFin){

      if(this.tipo==='edit'){
        state = await this.taskService.editTask(this.idTask,task);
      }else{
        state = await this.taskService.addTaskToActiveUser(task);
      }

    }else{
      this._snackBar.open('La fecha de inicio debe ser menor a la fecha de fin', 'Cerrar',{
        duration: 2000,
      }
      );
      this.loadingD = false;
    }

    if(state){
      this.dialogRef.close();
      this.loadingD = false;
    }
  }

}
