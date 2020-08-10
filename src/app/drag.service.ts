import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragService {

  boundaries:Array<any> = [];
  constructor() { }

  setBoundary(arr:Array<any>){
    this.boundaries = arr;
    
  }
}
