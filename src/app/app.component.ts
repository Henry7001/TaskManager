import { Component, OnInit } from '@angular/core';
import { SesionService } from './auth/services/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TaskManager';

  constructor(private sesionService: SesionService){}

  ngOnInit(): void {
    this.sesionService.initSessionStorage();
  }
}
