import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTxtComponent } from './record-txt.component';

describe('RecordTxtComponent', () => {
  let component: RecordTxtComponent;
  let fixture: ComponentFixture<RecordTxtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordTxtComponent]
    });
    fixture = TestBed.createComponent(RecordTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
