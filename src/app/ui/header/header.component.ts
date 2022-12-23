import { Component } from '@angular/core';
import { LoginComponent } from '../../auth/login/login.component';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username: string = '';
  constructor(
    private router: Router, private dialog: MatDialog) { }

  openDialogLogin() {
    //this.dialog.open(LoginComponent, {disableClose:true})
    const dialogRef = this.dialog.open(LoginComponent, { data: { username: this.username } });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/dashboard']);
      this.username = result;
    });
  }

  openDialogLogout() {
    this.router.navigate(['/']);
    this.username = '';
  }


  openDialogSignIn() {
    const dialogRef = this.dialog.open(SignInComponent, { data: { username: this.username } });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/PaginaInicial']);
    });
  }
}
