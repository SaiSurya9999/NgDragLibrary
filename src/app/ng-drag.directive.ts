import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ngDrag]'
})
export class NgDragDirective implements OnInit {

  constructor(private el: ElementRef) { 
      console.log(el.nativeElement);
     // this.el.nativeElement.style.cursor = "grab";
  //    this.onHold();
   //   this.onleave();
  }

  ngOnInit(){
    var mousePosition;
var offset = [0,0];
var div;
var isDown = false;

div = this.el.nativeElement;
div.style.position = "absolute";

div.addEventListener('mousedown', function(e) {
  isDown = true;
  div.style.cursor = "grabbing";
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
    div.style.cursor = "grab";
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
      div.style.cursor = "grabbing";
        mousePosition = {
    
            x : event.clientX,
            y : event.clientY
    
        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);
  }

  
}
