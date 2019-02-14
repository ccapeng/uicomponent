import { Component, NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

//import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
//import { AvatarComponent }  from './avatar/avatar.component';
//import { BreadcrumbComponent }      from './breadcrumb/breadcrumb.component';
//import { ButtonComponent }    from './button/button.component';
import { UIComponent }    from './ui/ui.component';
 
import { AppRoutingModule }     from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    //AvatarComponent,
    //BreadcrumbComponent,
    UIComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppComponent {
  title = 'tccui';
}
