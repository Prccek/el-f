import { ModuleWithProviders, NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CourseComponent} from './course.component';
import {CourseService} from './course.service';


const courseRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'course',
        component: CourseComponent
    }
]);

@NgModule ({
    imports: [
        courseRouting,
    ],
    declarations: [
        CourseComponent
    ],
    providers: [CourseService]
})

export class CourseModule {}
