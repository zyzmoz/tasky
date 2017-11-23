import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';
import { ActiveTasksComponent } from './pages/active-tasks/active-tasks.component';

//Routes
import { routing } from './app.routing';
import { SettingsComponent } from './pages/settings/settings.component';

//providers
import { TaskService } from './providers/task.service';

@NgModule({
  declarations: [
    AppComponent,
    AllTasksComponent,
    ActiveTasksComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
