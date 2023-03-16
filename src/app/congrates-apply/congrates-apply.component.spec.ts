import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratesApplyComponent } from './congrates-apply.component';

describe('CongratesApplyComponent', () => {
  let component: CongratesApplyComponent;
  let fixture: ComponentFixture<CongratesApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratesApplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongratesApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
