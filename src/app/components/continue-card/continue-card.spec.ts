import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueCard } from './continue-card';

describe('ContinueCard', () => {
  let component: ContinueCard;
  let fixture: ComponentFixture<ContinueCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinueCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinueCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
