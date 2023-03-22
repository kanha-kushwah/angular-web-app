import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TersConditionComponent } from './ters-condition.component';

describe('TersConditionComponent', () => {
  let component: TersConditionComponent;
  let fixture: ComponentFixture<TersConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TersConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TersConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
