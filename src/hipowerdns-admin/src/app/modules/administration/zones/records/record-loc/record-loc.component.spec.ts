import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordLocComponent } from './record-loc.component';

describe('RecordLocComponent', () => {
  let component: RecordLocComponent;
  let fixture: ComponentFixture<RecordLocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordLocComponent]
    });
    fixture = TestBed.createComponent(RecordLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
