import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgconfDragDropComponent } from './ngconf-drag-drop.component';

describe('NgconfDragDropComponent', () => {
  let component: NgconfDragDropComponent;
  let fixture: ComponentFixture<NgconfDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgconfDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgconfDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
