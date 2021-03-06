import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule} from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import {
  SharedModule,
  FooterComponent,
  HeaderComponent,
} from './shared';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { NewCourseComponent } from './new-course/new-course.component';
import {routing} from './app.routing';
import {CourseService} from './course/course.service';
import {AuthService} from './auth/auth.service';


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        CourseComponent,
        CoursesComponent,
        NewCourseComponent,

    ],
    imports: [
        BrowserModule,
        AuthModule,
        SharedModule,
        HomeModule,
        AdminModule,
        routing,
    ],
  providers: [
      CourseService,
      // AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
