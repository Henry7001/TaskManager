import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  sesion = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required])
  })

  constructor(
    private sesionService: SesionService,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>) { }

  OnSubmit() {

    let nombre = this.sesion.get('nombre')?.value!
    let contraseña = this.sesion.get('contraseña')?.value!

    let valid = this.sesionService.login(nombre, contraseña);
    console.log(nombre);


    if (valid) {
      this.dialogRef.close();
      this.router.navigate(['/dashboard']);
    }
  }
}
