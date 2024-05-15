import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordMinfoComponent } from './record-minfo.component';

describe('RecordMinfoComponent', () => {
  let component: RecordMinfoComponent;
  let fixture: ComponentFixture<RecordMinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordMinfoComponent]
    });
    fixture = TestBed.createComponent(RecordMinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
