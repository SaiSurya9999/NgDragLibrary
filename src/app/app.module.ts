import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgconfDragDropModule} from 'ngconf-drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDragDirective } from './ng-drag.directive';
import { DragBoundaryDirective } from './drag-boundary.directive';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgconfDragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
