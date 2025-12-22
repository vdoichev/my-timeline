import {Component, Input} from '@angular/core';
import {MatStep, MatStepLabel, MatStepper} from '@angular/material/stepper';
import {MatIcon} from '@angular/material/icon';

export interface TimelineItem {
  title: string;
  description?: string;
  date?: string;
  icon?: string;
  completed?: boolean;
}

@Component({
  selector: 'app-material-timeline',
  imports: [
    MatStepper,
    MatStep,
    MatIcon,
    MatStepLabel
  ],
  templateUrl: './material-timeline-component.html',
  styleUrl: './material-timeline-component.css',
})
export class MaterialTimelineComponent {
  @Input() items: TimelineItem[] = [];
}
