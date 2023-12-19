import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkoComponent } from './orko.component';

describe('OrkoComponent', () => {
  let component: OrkoComponent;
  let fixture: ComponentFixture<OrkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrkoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
