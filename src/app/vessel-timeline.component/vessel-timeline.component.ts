import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VesselStatus, VesselTimelineEvent} from '../app';
import {MatIcon} from '@angular/material/icon';
import {DatePipe, NgTemplateOutlet} from '@angular/common';
import {MatFabButton, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-vessel-timeline',
  imports: [
    MatIcon,
    DatePipe,
    MatIconButton,
    MatFabButton,
    NgTemplateOutlet
  ],
  templateUrl: './vessel-timeline.component.html',
  styleUrl: './vessel-timeline.component.css',
})
export class VesselTimelineComponent {
  @Input() events: VesselTimelineEvent[] = [];

  @Output() edit = new EventEmitter<VesselTimelineEvent>();
  @Output() remove = new EventEmitter<VesselTimelineEvent>();
  @Output() add = new EventEmitter<void>();

  trackById = (_: number, item: VesselTimelineEvent) => item.id;

  isLeft(index: number): boolean {
    return this.events[index]?.status !== "handling";
  }

  statusLabel(status: VesselStatus): string {
    return {
      arrival: 'Підхід',
      handling: 'Під обробкою',
      departure: 'Відхід'
    }[status];
  }
}
