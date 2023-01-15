import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { TodayComponent } from './views/today/today.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { TodosComponent } from './views/todos/todos.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { ViewTaskComponent } from './views/view-task/view-task.component';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TerminadosComponent } from './views/terminados/terminados.component';
import { ProximosComponent } from './views/proximos/proximos.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TodayComponent,
    AddTaskComponent,
    ProximosComponent,
    AddTaskFormComponent,
    TodosComponent,
    TaskListComponent,
    TaskComponent,
    ViewTaskComponent,
    DeleteTaskComponent,
    EditTaskComponent,
    TerminadosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule,
    AppRoutingModule,
  ]
})
export class TaskModule { }
