import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordHttpsComponent } from './record-https.component';

describe('RecordHttpsComponent', () => {
  let component: RecordHttpsComponent;
  let fixture: ComponentFixture<RecordHttpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordHttpsComponent]
    });
    fixture = TestBed.createComponent(RecordHttpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
