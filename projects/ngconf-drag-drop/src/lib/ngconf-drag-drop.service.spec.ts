import { TestBed } from '@angular/core/testing';

import { NgconfDragDropService } from './ngconf-drag-drop.service';

describe('NgconfDragDropService', () => {
  let service: NgconfDragDropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgconfDragDropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
