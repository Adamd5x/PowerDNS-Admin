import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCnameComponent } from './record-cname.component';

describe('RecordCnameComponent', () => {
  let component: RecordCnameComponent;
  let fixture: ComponentFixture<RecordCnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordCnameComponent]
    });
    fixture = TestBed.createComponent(RecordCnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
