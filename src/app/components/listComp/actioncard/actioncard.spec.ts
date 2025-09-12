import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actioncard } from './actioncard';

describe('Actioncard', () => {
  let component: Actioncard;
  let fixture: ComponentFixture<Actioncard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actioncard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actioncard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
