import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRetailersComponent } from './display-retailers.component';

describe('DisplayRetailersComponent', () => {
  let component: DisplayRetailersComponent;
  let fixture: ComponentFixture<DisplayRetailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRetailersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
