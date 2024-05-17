import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordAfsdbComponent } from './record-afsdb.component';

describe('RecordAfsdbComponent', () => {
  let component: RecordAfsdbComponent;
  let fixture: ComponentFixture<RecordAfsdbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordAfsdbComponent]
    });
    fixture = TestBed.createComponent(RecordAfsdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
