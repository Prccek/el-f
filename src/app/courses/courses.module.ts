import { ModuleWithProviders, NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CoursesComponent} from './courses.component';
import {CourseService} from '../course.service';
import {SharedModule} from '../shared';


const coursesRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'courses',
        component: CoursesComponent
    }
]);

@NgModule ({
    imports: [
        coursesRouting,
        SharedModule
    ],
    declarations: [
        CoursesComponent
    ],
    providers: [CourseService]
})

export class CoursesModule {}
