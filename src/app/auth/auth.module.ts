import {ModuleWithProviders, NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthComponent } from './auth.component';
import {SharedModule} from '../shared';
import {AuthService} from './auth.service';


const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  }
]);

@NgModule({
  imports: [
    authRouting,
    SharedModule
  ],
  declarations: [
    AuthComponent
  ],

  providers: [AuthService]
})

export class AuthModule {}
