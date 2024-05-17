import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSoaComponent } from './record-soa.component';

describe('RecordSoaComponent', () => {
  let component: RecordSoaComponent;
  let fixture: ComponentFixture<RecordSoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordSoaComponent]
    });
    fixture = TestBed.createComponent(RecordSoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
