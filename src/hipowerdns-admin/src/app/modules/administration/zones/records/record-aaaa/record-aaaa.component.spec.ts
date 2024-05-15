import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordAaaaComponent } from './record-aaaa.component';

describe('RecordAaaaComponent', () => {
  let component: RecordAaaaComponent;
  let fixture: ComponentFixture<RecordAaaaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordAaaaComponent]
    });
    fixture = TestBed.createComponent(RecordAaaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
