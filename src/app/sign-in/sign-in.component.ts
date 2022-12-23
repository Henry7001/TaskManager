import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent { 
  registrarse = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    correo: new FormControl ('',[Validators.required])
  })

  constructor(private router: Router, 
    private dialogRef: MatDialogRef<SignInComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any){

    }

  OnSubmit() {
    this.dialogRef.close();
    this.router.navigate(['/PaginaInicial']);
  }
}
