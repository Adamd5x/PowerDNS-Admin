import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordAComponent } from './record-a.component';

describe('RecordAComponent', () => {
  let component: RecordAComponent;
  let fixture: ComponentFixture<RecordAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordAComponent]
    });
    fixture = TestBed.createComponent(RecordAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
