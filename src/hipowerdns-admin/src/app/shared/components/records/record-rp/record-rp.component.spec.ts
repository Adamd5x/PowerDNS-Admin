import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRpComponent } from './record-rp.component';

describe('RecordRpComponent', () => {
  let component: RecordRpComponent;
  let fixture: ComponentFixture<RecordRpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordRpComponent]
    });
    fixture = TestBed.createComponent(RecordRpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
