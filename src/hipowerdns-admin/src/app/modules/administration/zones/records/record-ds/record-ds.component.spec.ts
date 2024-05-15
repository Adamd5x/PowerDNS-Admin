import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDsComponent } from './record-ds.component';

describe('RecordDsComponent', () => {
  let component: RecordDsComponent;
  let fixture: ComponentFixture<RecordDsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordDsComponent]
    });
    fixture = TestBed.createComponent(RecordDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
