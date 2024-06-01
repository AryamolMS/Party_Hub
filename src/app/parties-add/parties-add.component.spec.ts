import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesAddComponent } from './parties-add.component';

describe('PartiesAddComponent', () => {
  let component: PartiesAddComponent;
  let fixture: ComponentFixture<PartiesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartiesAddComponent]
    });
    fixture = TestBed.createComponent(PartiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
