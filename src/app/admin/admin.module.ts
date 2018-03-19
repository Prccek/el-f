import { ModuleWithProviders, NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminComponent} from './admin.component';
import {SharedModule} from '../shared';



import {CourseService} from '../course/course.service';
import {CoursesComponent} from '../courses/courses.component';
import {NewCourseComponent} from '../new-course/new-course.component';



const adminRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'courses', component: CoursesComponent},
            { path: 'new-course', component: NewCourseComponent}
        ]
    }
]);

@NgModule ({
    imports: [
        adminRouting,
        SharedModule,


    ],
    declarations: [
        AdminComponent,

    ],
    providers: [CourseService]
})

export class AdminModule {}

