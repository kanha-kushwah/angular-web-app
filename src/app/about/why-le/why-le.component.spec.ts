import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyLEComponent } from './why-le.component';

describe('WhyLEComponent', () => {
  let component: WhyLEComponent;
  let fixture: ComponentFixture<WhyLEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyLEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
