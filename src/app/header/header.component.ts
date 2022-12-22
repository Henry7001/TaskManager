import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {Router} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   constructor (
    private router : Router, private dialog: MatDialog) {}
    
   openDialoLogin(){
        this.dialog.open(LoginComponent)
   }
}
