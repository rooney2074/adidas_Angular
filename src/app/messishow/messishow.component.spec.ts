import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessishowComponent } from './messishow.component';

describe('MessishowComponent', () => {
  let component: MessishowComponent;
  let fixture: ComponentFixture<MessishowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessishowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessishowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
