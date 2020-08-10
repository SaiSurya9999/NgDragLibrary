import { Directive, ElementRef, OnInit } from '@angular/core';
import { DragService } from './drag.service';

@Directive({
  selector: '[ngDragBoundary]'
})
export class DragBoundaryDirective implements OnInit {

  constructor(private el: ElementRef, private dragService: DragService) {
 
   }
   ngOnInit(){
    var div = this.el.nativeElement;
  
    this.boundaryRefresh(div);
    this.windowListner(div);
   }

   windowListner(div){
    let that = this;
    window.addEventListener('resize', function (e) {
        that.boundaryRefresh(div);
     });
   }
   boundaryRefresh(div){
    let arr:Array<any> = [div.offsetTop, div.offsetLeft,window.outerWidth -(div.offsetLeft + div.offsetWidth),window.outerHeight - (div.offsetTop + div.offsetHeight) ];
    this.dragService.setBoundary(arr);
   // console.log(div.offsetTop);
    //console.log(div.offsetLeft);
   }

}
