import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWebinar } from './live-webinar';

describe('LiveWebinar', () => {
  let component: LiveWebinar;
  let fixture: ComponentFixture<LiveWebinar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveWebinar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveWebinar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
