import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleOfCoachComponent } from './_layout/schedule-of-coach/schedule-of-coach.component';
import { ContactUsComponent } from './_layout/contact-us/contact-us.component';
import { MainLayoutComponent } from './_layout/main-layout/main-layout.component';
import { NavBarComponent } from './_layout/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleOfCoachComponent,
    ContactUsComponent,
    MainLayoutComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
