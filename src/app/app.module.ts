import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrentcoursesComponent } from './currentcourses/currentcourses.component';
import { AttendanceChartComponent } from './attendence-chart/attendence-chart.component';
import { AnnouncementComponent } from './announcement/announcement.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    CurrentcoursesComponent,
    AttendanceChartComponent,
    AnnouncementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
