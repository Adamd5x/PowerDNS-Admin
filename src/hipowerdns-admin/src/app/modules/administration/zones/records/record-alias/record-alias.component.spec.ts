import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordAliasComponent } from './record-alias.component';

describe('RecordAliasComponent', () => {
  let component: RecordAliasComponent;
  let fixture: ComponentFixture<RecordAliasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordAliasComponent]
    });
    fixture = TestBed.createComponent(RecordAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
