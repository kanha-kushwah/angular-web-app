import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCongratesComponent } from './test-congrates.component';

describe('TestCongratesComponent', () => {
  let component: TestCongratesComponent;
  let fixture: ComponentFixture<TestCongratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCongratesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCongratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
