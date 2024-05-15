import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordNaptrComponent } from './record-naptr.component';

describe('RecordNaptrComponent', () => {
  let component: RecordNaptrComponent;
  let fixture: ComponentFixture<RecordNaptrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordNaptrComponent]
    });
    fixture = TestBed.createComponent(RecordNaptrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
