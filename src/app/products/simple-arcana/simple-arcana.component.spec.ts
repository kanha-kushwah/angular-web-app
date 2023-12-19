import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleArcanaComponent } from './simple-arcana.component';

describe('SimpleArcanaComponent', () => {
  let component: SimpleArcanaComponent;
  let fixture: ComponentFixture<SimpleArcanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleArcanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleArcanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
