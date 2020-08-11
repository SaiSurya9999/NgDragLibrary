# Ngconf-DragDrop Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.  

> ![ngconf-dragdrop](https://img.icons8.com/color/48/000000/resize-four-directions.png "Move")  Drag Drop feature for Angular.  


### Demo Link   
[Stackblitz Demo](https://stackblitz.com/edit/ngconf-dragdrop "ngconf-dragdrop Demo") 

## Step - 1

> npm i ngconf-pagination --save  
[NPM Package Link](https://www.npmjs.com/package/ngconf-drag-drop "ngconf-drag-drop")  

## Step - 2  
Import NgconfDragDropModule in app.module.ts file.  

**app.module.ts**
```typescript
import {NgconfDragDropModule} from 'ngconf-drag-drop';
 imports: [
    BrowserModule,
    AppRoutingModule,
    NgconfDragDropModule,
    HttpClientModule
  ]
```

## Step - 3
This step is to quick start the usage of package later with the understanding of workflow you can  
modify the code. You can have a look in our stackbliz demo for more clarity.  
**app.component.css**
```css
.drag{
    height: 100px;
    width: 100px;
    border: solid 3px;
}

.container{
 border: dotted 3px;
 min-height: 500px;
}
```
**app.component.html**
```html
<div class="container mt-5 " ngDragBoundary>
    <div class="drag" ngDrag>
       <h5 class="text-muted text-center mt-3">I am Draggable :)</h5>
    </div>
</div> 


```




> That's it you are good to go. Happy Coding :)
