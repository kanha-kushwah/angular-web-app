import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskVanaComponent } from './ask-vana.component';

describe('AskVanaComponent', () => {
  let component: AskVanaComponent;
  let fixture: ComponentFixture<AskVanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskVanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskVanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
