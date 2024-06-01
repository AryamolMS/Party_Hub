import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesEditComponent } from './parties-edit.component';

describe('PartiesEditComponent', () => {
  let component: PartiesEditComponent;
  let fixture: ComponentFixture<PartiesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartiesEditComponent]
    });
    fixture = TestBed.createComponent(PartiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
