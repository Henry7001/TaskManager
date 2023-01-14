import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SesionService } from '../../services/sesion.service';
import { User } from '../../interface/user';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  registrarse = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required])
  })

  constructor(
    private sesionService: SesionService,
    private router: Router,
    private dialogRef: MatDialogRef<SignInComponent>) { }

  OnSubmit() {

    const newUser: User = {
      nombre: this.registrarse.get('nombre')?.value!,
      contraseña: this.registrarse.get('contraseña')?.value!,
      correo: this.registrarse.get('correo')?.value!,
      tasks: []
    }

    this.sesionService.onNewUser(newUser)

    this.dialogRef.close();
    this.router.navigate(['/dashboard']);
  }
}
