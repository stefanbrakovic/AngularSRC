import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesGymComponent } from './services-gym.component';

describe('ServicesGymComponent', () => {
  let component: ServicesGymComponent;
  let fixture: ComponentFixture<ServicesGymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesGymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
