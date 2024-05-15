import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordMxComponent } from './record-mx.component';

describe('RecordMxComponent', () => {
  let component: RecordMxComponent;
  let fixture: ComponentFixture<RecordMxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordMxComponent]
    });
    fixture = TestBed.createComponent(RecordMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
