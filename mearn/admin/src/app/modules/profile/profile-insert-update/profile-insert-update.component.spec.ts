import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInsertComponent } from './profile-insert-update.component';

describe('ProfilesComponent', () => {
  let component: ProfileInsertComponent;
  let fixture: ComponentFixture<ProfileInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
