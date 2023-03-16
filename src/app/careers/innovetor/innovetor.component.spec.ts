import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovetorComponent } from './innovetor.component';

describe('InnovetorComponent', () => {
  let component: InnovetorComponent;
  let fixture: ComponentFixture<InnovetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovetorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
