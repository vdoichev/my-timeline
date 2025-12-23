import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselTimelineComponent } from './vessel-timeline.component';

describe('VesselTimelineComponent', () => {
  let component: VesselTimelineComponent;
  let fixture: ComponentFixture<VesselTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VesselTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselTimelineComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
