import { Directive, ElementRef, OnInit } from '@angular/core';
import { DragService } from './drag.service';

@Directive({
  selector: '[ngDrag]'
})
export class NgDragDirective implements OnInit {

  

  isDown: boolean = false;
  offset: any = [0, 0];

  constructor(private el: ElementRef, private dragService: DragService) { }

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
        //Top Offset
        let boundaryX = that.dragService.boundaries[1];
        let boundaryY = that.dragService.boundaries[0];
        if (that.dragService.parent != "") {
          //Right Offset
          var bounX = (that.dragService.parent.getBoundingClientRect().width - that.el.nativeElement.getBoundingClientRect().width) + that.dragService.parent.getBoundingClientRect().x;
          bounX = Math.round(bounX);
          //Bottom Offset Limits
          var bounY = (that.dragService.parent.getBoundingClientRect().height - that.el.nativeElement.getBoundingClientRect().height) + that.dragService.parent.getBoundingClientRect().y;
          bounY = Math.round(bounY);

        }

        //If no boundary is set          
        if (that.dragService.boundaries.length == 0) {
          div.style.left = (x + that.offset[0]) + 'px';
          div.style.top = (y + that.offset[1]) + 'px';
        }
        else {
          if (((x + that.offset[0]) >= boundaryX) && ((x + that.offset[0]) <= bounX)) {
            div.style.left = (x + that.offset[0]) + 'px';

          }
          if (((y + that.offset[1]) >= boundaryY) && ((y + that.offset[1]) <= bounY)) {
            div.style.top = (y + that.offset[1]) + 'px';
          }
        }
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
        //Top Offset
        let boundaryX = that.dragService.boundaries[1];
        let boundaryY = that.dragService.boundaries[0];
        if (that.dragService.parent != "") {
          //Right Offset
          var bounX = (that.dragService.parent.getBoundingClientRect().width - that.el.nativeElement.getBoundingClientRect().width) + that.dragService.parent.getBoundingClientRect().x;
          bounX = Math.round(bounX);
          //Bottom Offset Limits
          var bounY = (that.dragService.parent.getBoundingClientRect().height - that.el.nativeElement.getBoundingClientRect().height) + that.dragService.parent.getBoundingClientRect().y;
          bounY = Math.round(bounY);

        }

        //If no boundary is set          
        if (that.dragService.boundaries.length == 0) {
          div.style.left = (x + that.offset[0]) + 'px';
          div.style.top = (y + that.offset[1]) + 'px';
        }
        else {
          if (((x + that.offset[0]) >= boundaryX) && ((x + that.offset[0]) <= bounX)) {
            div.style.left = (x + that.offset[0]) + 'px';

          }
          if (((y + that.offset[1]) >= boundaryY) && ((y + that.offset[1]) <= bounY)) {
            div.style.top = (y + that.offset[1]) + 'px';
          }
        }
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

}

