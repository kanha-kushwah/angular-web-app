import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningFillDetailsComponent } from './opening-fill-details.component';

describe('OpeningFillDetailsComponent', () => {
  let component: OpeningFillDetailsComponent;
  let fixture: ComponentFixture<OpeningFillDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningFillDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeningFillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
