import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  MatDialogRef } from '@angular/material/dialog';
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

  async OnSubmit() {

    const newUser: User = {
      nombre: this.registrarse.get('nombre')?.value!,
      contraseña: this.registrarse.get('contraseña')?.value!,
      correo: this.registrarse.get('correo')?.value!,
      tasks: []
    }

    const state = await this.sesionService.onNewUser(newUser)

    if(state){
      console.log(newUser);
        // this.api.register(newUser)
        //   .subscribe( (data: any) => {
        //     console.log(data);
        //   });

      this.dialogRef.close();
      this.router.navigate(['/dashboard']);
    }
  }
}
