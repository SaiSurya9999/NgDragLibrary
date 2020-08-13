import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import {SortingService} from './sorting.service';
@Directive({
  selector: '[ngDragSort]'
})
export class DragSortDirective implements OnInit{

  element:any;
  isDown:boolean = false;
  offset: any = [0, 0];
  constructor(private el: ElementRef, private service: SortingService) { }


 ngOnInit() {
   var div = this.el.nativeElement;
   div.style.position = "static";
   this.onHold(div);
   this.onMove(div);
   this.onLeave(div);
   this.touchStart(div);
   this.touchEnd(div);
 }

 //Handling onHold event
 onHold(div) {
   let that = this;
   div.addEventListener('mousedown', function (e) {
      if(!that.isDown){
        that.styling(div,that);
      }
     that.isDown = true;
     div.style.cursor = "grabbing";
     that.offset = [
       div.offsetLeft - e.clientX,
       div.offsetTop - e.clientY
     ];
   }, true);
 }

 //Handling onLeave Event
 onLeave(div) {
   let that = this;
   document.addEventListener('mouseup', function () {
     that.isDown = false;
     div.style.cursor = "grab";
   }, true);
 }

 //Handling on Move event
 onMove(div) {
   let that = this;
   document.addEventListener('mousemove', function (event) {
     event.preventDefault();
     
     if (that.isDown) {
       div.style.cursor = "grabbing";
       //Mouse Positions
       let x = event.clientX;
       let y = event.clientY;
  

         div.style.left = (x + that.offset[0]) + 'px';
         div.style.top = (y + that.offset[1]) + 'px';
       
       
     }
   }, true);
 }

 touchStart(div){
   let that = this;
   div.addEventListener('touchstart', function (e) {
     div.style.position = "absolute";
     console.log(e);
     that.isDown = true;
     div.style.cursor = "grabbing";
     that.offset = [
       div.offsetLeft - e.touches[0].clientX,
       div.offsetTop - e.touches[0].clientY
     ];
   }, { passive: false });
   document.addEventListener('touchmove', function (event:any) {
     event.preventDefault();
     if (that.isDown) {
       div.style.cursor = "grabbing";
       //Mouse Positions
       let x = event.touches[0].clientX;
       let y = event.touches[0].clientY;
   

         div.style.left = (x + that.offset[0]) + 'px';
         div.style.top = (y + that.offset[1]) + 'px';
       
     
     }
   }, { passive: false });
 }

 touchEnd(div){
   let that = this;
   document.addEventListener('touchend', function () {
     that.isDown = false;
     div.style.cursor = "grab";
   }, { passive: false });    
 }


 styling(div,that){
  div.style.position = "absolute";
  div.style = "box-shadow: 0 1rem 3rem rgba(0,0,0,.175)";
  div.style.width = that.service.listWidth+"px";
 }

}
