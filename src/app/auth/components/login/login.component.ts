import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SesionService } from '../../services/sesion.service';
import { httpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  sesion = new FormGroup({
    correo: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required])
  })

  constructor(
    private sesionService: SesionService,
    private httpService: httpService,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>) { }

  OnSubmit() {

    let correo = this.sesion.get('correo')?.value!
    let contraseña = this.sesion.get('contraseña')?.value!

    let valid = this.sesionService.login(correo, contraseña);

    if (valid) {
      this.dialogRef.close();
      this.router.navigate(['/dashboard']);
    }
  }
}
