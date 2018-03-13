import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule} from './home/home,module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import {
  SharedModule,
  FooterComponent,
  HeaderComponent,
} from './shared';



  const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AuthModule,
    SharedModule,
    HomeModule,
    rootRouting,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}