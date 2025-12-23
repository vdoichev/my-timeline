import {Component, Input} from '@angular/core';
import {MatStep, MatStepLabel, MatStepper, MatStepperIcon} from '@angular/material/stepper';
import {MatIcon} from '@angular/material/icon';
import {NgClass} from '@angular/common';

export type TimelineStatus = 'success' | 'active' | 'warning' | 'error' | 'pending';

export interface TimelineItem {
  id: number,
  title: string;
  description?: string;
  date?: string;
  icon?: string;
  status: TimelineStatus;
  isGroupChild?: boolean;
}

@Component({
  selector: 'app-material-timeline',
  imports: [
    MatStepper,
    MatStep,
    MatIcon,
    MatStepLabel,
    NgClass,
    MatStepperIcon
  ],
  templateUrl: './material-timeline-component.html',
  styleUrl: './material-timeline-component.css',
})
export class MaterialTimelineComponent {
  @Input() timelines: TimelineItem[] = [];
}
