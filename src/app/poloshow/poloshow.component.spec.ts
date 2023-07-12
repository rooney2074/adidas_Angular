import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloshowComponent } from './poloshow.component';

describe('PoloshowComponent', () => {
  let component: PoloshowComponent;
  let fixture: ComponentFixture<PoloshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoloshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoloshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
