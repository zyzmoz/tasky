import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages
import { ActiveTasksComponent } from './pages/active-tasks/active-tasks.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';
import { SettingsComponent }  from './pages/settings/settings.component';

const appRoutes : Routes = [
  {
    path: '',
    component: ActiveTasksComponent
  },
  {
    path:'allTasks',
    component: AllTasksComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },

  //otherwise
  {
    path: '**',
    component: ActiveTasksComponent
  }

];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
