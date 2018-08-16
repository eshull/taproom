import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatronComponent } from './patron/patron.component';
import { EmployeeComponent } from './employee/employee.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PatronComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
