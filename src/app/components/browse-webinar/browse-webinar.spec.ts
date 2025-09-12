import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseWebinar } from './browse-webinar';

describe('BrowseWebinar', () => {
  let component: BrowseWebinar;
  let fixture: ComponentFixture<BrowseWebinar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseWebinar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseWebinar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
