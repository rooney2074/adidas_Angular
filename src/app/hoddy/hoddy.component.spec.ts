import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddyComponent } from './hoddy.component';

describe('HoddyComponent', () => {
  let component: HoddyComponent;
  let fixture: ComponentFixture<HoddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoddyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
