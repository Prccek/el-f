import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {routing} from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
      routing
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ]
})
export class SharedModule {}
