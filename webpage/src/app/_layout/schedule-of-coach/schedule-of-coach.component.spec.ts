import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOfCoachComponent } from './schedule-of-coach.component';

describe('ScheduleOfCoachComponent', () => {
  let component: ScheduleOfCoachComponent;
  let fixture: ComponentFixture<ScheduleOfCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOfCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOfCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
