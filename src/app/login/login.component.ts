import { Component } from '@angular/core';
import {Inject} from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    sesion = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })

    constructor(private router: Router, 
      private dialogRef: MatDialogRef<LoginComponent>, 
      @Inject(MAT_DIALOG_DATA) public data:any){

      }

    OnSubmit() {
      this.dialogRef.close();
      this.router.navigate(['/dashboard']);
    }
}
