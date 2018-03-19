import { ModuleWithProviders, NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HomeComponent} from './home.component';
import { SharedModule} from '../shared';
import {CourseService} from '../course/course.service';
import {CoursesComponent} from '../courses/courses.component';
import {NewCourseComponent} from '../new-course/new-course.component';



const homeRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: CoursesComponent},
            { path: 'new-course', component: NewCourseComponent}
        ]
    }
]);

@NgModule ({
  imports: [
    homeRouting,
    SharedModule,
    RouterModule,


],
  declarations: [
    HomeComponent,
],
  providers: [CourseService]
})

export class HomeModule {}

