import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { DragService } from '../app/drag.service';

@Directive({
  selector: '[ngDrag]'
})
export class NgDragDirective implements OnInit {

  //@Input() boundary:any;
  
  isDown: boolean = false;
  offset: any = [0, 0];

  constructor(private el: ElementRef, private dragService: DragService) { }

  ngOnInit() {
    var div = this.el.nativeElement;
    div.style.position = "static";
    this.onHold(div);
    this.onMove(div);
    this.onLeave(div);
  }

  //Handling onHold event
  onHold(div) {
    let that = this;
    div.addEventListener('mousedown', function (e) {
      div.style.position = "absolute";
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
        let boundaryX = that.dragService.boundaries[1];
        let boundaryY = that.dragService.boundaries[0];
          
        var bounX = (that.dragService.parent.getBoundingClientRect().width - that.el.nativeElement.getBoundingClientRect().width) +   that.dragService.parent.getBoundingClientRect().x;
          bounX = Math.round(bounX);
          var bounY = (that.dragService.parent.getBoundingClientRect().height - that.el.nativeElement.getBoundingClientRect().height) +   that.dragService.parent.getBoundingClientRect().y;
          bounY = Math.round(bounY);
         console.log(bounY);
          //If no boundary is set          
          if(that.dragService.boundaries.length == 0){
            div.style.left = (x + that.offset[0]) + 'px';
            div.style.top = (y + that.offset[1]) + 'px';
       }
         else{
          if(((x + that.offset[0]) >= boundaryX) && ((x + that.offset[0]) <= bounX) ){
            div.style.left = (x + that.offset[0]) + 'px';
            
           }
           if(((y + that.offset[1]) >= boundaryY) && ((y + that.offset[1]) <= bounY)){
            div.style.top = (y + that.offset[1]) + 'px';
           }
         } 
      }
    }, true);
  }


}

