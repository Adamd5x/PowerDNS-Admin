import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDnameComponent } from './record-dname.component';

describe('RecordDnameComponent', () => {
  let component: RecordDnameComponent;
  let fixture: ComponentFixture<RecordDnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordDnameComponent]
    });
    fixture = TestBed.createComponent(RecordDnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
