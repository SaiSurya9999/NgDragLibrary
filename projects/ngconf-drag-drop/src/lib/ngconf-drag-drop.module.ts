import { NgModule } from '@angular/core';
import { NgconfDragDropComponent } from './ngconf-drag-drop.component';
import { NgDragDirective } from './ng-drag.directive';
import { DragBoundaryDirective } from './drag-boundary.directive';



@NgModule({
  declarations: [NgconfDragDropComponent,NgDragDirective,
    DragBoundaryDirective],
  imports: [
  ],
  exports: [NgconfDragDropComponent,NgDragDirective,DragBoundaryDirective]
})
export class NgconfDragDropModule { }
