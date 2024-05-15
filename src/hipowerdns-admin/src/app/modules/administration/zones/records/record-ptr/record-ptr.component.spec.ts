import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordPtrComponent } from './record-ptr.component';

describe('RecordPtrComponent', () => {
  let component: RecordPtrComponent;
  let fixture: ComponentFixture<RecordPtrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordPtrComponent]
    });
    fixture = TestBed.createComponent(RecordPtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
