import {Component, Input} from '@angular/core';
import {MatStep, MatStepLabel, MatStepper} from '@angular/material/stepper';
import {MatIcon} from '@angular/material/icon';
import {NgClass} from '@angular/common';

export type TimelineStatus = 'success' | 'active' | 'warning' | 'error' | 'pending';

export interface TimelineItem {
  title: string;
  description?: string;
  date?: string;
  icon?: string;
  completed?: boolean;
  status: TimelineStatus;
}

@Component({
  selector: 'app-material-timeline',
  imports: [
    MatStepper,
    MatStep,
    MatIcon,
    MatStepLabel,
    NgClass
  ],
  templateUrl: './material-timeline-component.html',
  styleUrl: './material-timeline-component.css',
})
export class MaterialTimelineComponent {
  @Input() timelines: TimelineItem[] = [];
}
