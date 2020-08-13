import { Directive, ElementRef, OnInit } from '@angular/core';
import { SortingService } from './sorting.service';

@Directive({
  selector: '[ngDropList]'
})
export class DropListDirective implements OnInit {

  constructor(private el: ElementRef, private service: SortingService) { }
  ngOnInit(){
    console.log(this.el.nativeElement.style.width);
    this.service.setWidth(this.el.nativeElement.getBoundingClientRect().width);
  }
}
