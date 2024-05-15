import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSrvComponent } from './record-srv.component';

describe('RecordSrvComponent', () => {
  let component: RecordSrvComponent;
  let fixture: ComponentFixture<RecordSrvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordSrvComponent]
    });
    fixture = TestBed.createComponent(RecordSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
