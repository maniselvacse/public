import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideBottomFloatingNavComponent } from './right-side-bottom-floating-nav.component';

describe('RightSideBottomFloatingNavComponent', () => {
  let component: RightSideBottomFloatingNavComponent;
  let fixture: ComponentFixture<RightSideBottomFloatingNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideBottomFloatingNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSideBottomFloatingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
