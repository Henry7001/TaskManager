import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../../../auth/components/sign-in/sign-in.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { SesionService } from 'src/app/auth/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string | undefined;
  constructor(
    public sesionService: SesionService,
    private router: Router, private dialog: MatDialog) {


  }
  ngOnInit(): void {
    this.username = this.sesionService.getActiveUser()?.nombre;
  }

  onLogoClick() {
    this.router.navigate(['/']);
  }

  openDialogLogin() {
    //this.dialog.open(LoginComponent, {disableClose:true})
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(() => {
      if (this.sesionService.isActiveUser()) {
        this.router.navigate(['/dashboard']);
        this.username = this.sesionService.getActiveUser()?.nombre;
      }
    });
  }

  openDialogLogout() {
    this.router.navigate(['/']);
    this.sesionService.logout();
    this.username = '';
  }

  openDialogSignIn() {
    const dialogRef = this.dialog.open(SignInComponent);

    dialogRef.afterClosed().subscribe(() => {
      if (this.sesionService.isActiveUser()) {
        this.router.navigate(['/dashboard']);
        this.username = this.sesionService.getActiveUser()?.nombre!;
      }
    });
  }
}
