import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyOpeningOtpComponent } from './apply-opening-otp.component';

describe('ApplyOpeningOtpComponent', () => {
  let component: ApplyOpeningOtpComponent;
  let fixture: ComponentFixture<ApplyOpeningOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyOpeningOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyOpeningOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
