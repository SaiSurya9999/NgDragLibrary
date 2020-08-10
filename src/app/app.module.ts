import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDragDirective } from './ng-drag.directive';
import { DragBoundaryDirective } from './drag-boundary.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgDragDirective,
    DragBoundaryDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
