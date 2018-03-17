import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {CoursesComponent} from './courses/courses.component';
import {NewCourseComponent} from './new-course/new-course.component';



const APP_ROUTES: Routes = [
    { path: 'courses', component: CoursesComponent},
    { path: 'new-course', component: NewCourseComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
