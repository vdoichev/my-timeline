import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VesselStatus, VesselTimelineEvent} from '../app';
import {MatIcon} from '@angular/material/icon';
import {DatePipe, NgTemplateOutlet} from '@angular/common';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';

interface TimelineDayGroup {
  date: Date;
  events: VesselTimelineEvent[];
}

@Component({
  selector: 'app-vessel-timeline',
  imports: [
    MatIcon,
    DatePipe,
    MatIconButton,
    MatFabButton,
    NgTemplateOutlet,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions
  ],
  templateUrl: './vessel-timeline.component.html',
  styleUrl: './vessel-timeline.component.css',
})
export class VesselTimelineComponent {
  @Input() events: VesselTimelineEvent[] = [];

  @Output() edit = new EventEmitter<VesselTimelineEvent>();
  @Output() remove = new EventEmitter<VesselTimelineEvent>();
  @Output() add = new EventEmitter<void>();

  get groupedEvents(): TimelineDayGroup[] {
    const map = new Map<string, TimelineDayGroup>();

    for (const event of this.events) {
      const key = event.actualDateTime.toDateString();

      if (!map.has(key)) {
        map.set(key, {
          date: new Date(event.actualDateTime),
          events: []
        });
      }

      map.get(key)!.events.push(event);
    }

    return Array.from(map.values());
  }

  isRepeatedStatusInGroup(events: VesselTimelineEvent[], index: number): boolean {
    if (index === 0) return false;
    return events[index].status === events[index - 1].status;
  }

  isLeft(index: number): boolean {
    return index % 2 === 0;
  }

  statusLabel(status: VesselStatus): string {
    return {
      arrival: 'Підхід',
      handling: 'Під обробкою',
      departure: 'Відхід'
    }[status];
  }
}
