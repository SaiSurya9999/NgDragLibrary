import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  listWidth:any = "";
  constructor() { }

  setWidth(h){
    this.listWidth = h;
  }

  
}
