import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragService {
  parent:any = "";
  boundaries:Array<any> = [];
  constructor() { }

  setBoundary(arr:Array<any>){
    this.boundaries = arr;
    
  }
  setParent(el){
    this.parent = el;
   // console.log(this.parent);
  }
  
}
