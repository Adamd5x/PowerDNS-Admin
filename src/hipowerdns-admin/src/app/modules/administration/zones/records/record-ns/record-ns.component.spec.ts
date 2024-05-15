import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordNsComponent } from './record-ns.component';

describe('RecordNsComponent', () => {
  let component: RecordNsComponent;
  let fixture: ComponentFixture<RecordNsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordNsComponent]
    });
    fixture = TestBed.createComponent(RecordNsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
