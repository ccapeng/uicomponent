import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UIComponent }      from './ui/ui.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'ui/:ui', component: UIComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  //imports: [ RouterModule.forRoot(routes,{ enableTracing: true }) ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }