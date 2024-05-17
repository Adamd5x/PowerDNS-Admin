import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTlsaComponent } from './record-tlsa.component';

describe('RecordTlsaComponent', () => {
  let component: RecordTlsaComponent;
  let fixture: ComponentFixture<RecordTlsaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordTlsaComponent]
    });
    fixture = TestBed.createComponent(RecordTlsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
