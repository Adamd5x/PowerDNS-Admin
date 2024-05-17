import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCertComponent } from './record-cert.component';

describe('RecordCertComponent', () => {
  let component: RecordCertComponent;
  let fixture: ComponentFixture<RecordCertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordCertComponent]
    });
    fixture = TestBed.createComponent(RecordCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
