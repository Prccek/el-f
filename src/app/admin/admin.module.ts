import { ModuleWithProviders, NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminComponent} from './admin.component';
import {SharedModule} from '../shared';


const adminRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'admin',
        component: AdminComponent
    }
]);

@NgModule ({
    imports: [
        adminRouting,
        SharedModule
    ],
    declarations: [
        AdminComponent
    ],
    providers: []
})

export class AdminModule {}

