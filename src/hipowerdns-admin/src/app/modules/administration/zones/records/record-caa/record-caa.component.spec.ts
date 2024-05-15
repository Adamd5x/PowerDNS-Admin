import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCaaComponent } from './record-caa.component';

describe('RecordCaaComponent', () => {
  let component: RecordCaaComponent;
  let fixture: ComponentFixture<RecordCaaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordCaaComponent]
    });
    fixture = TestBed.createComponent(RecordCaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
