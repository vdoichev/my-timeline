import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VesselStatus, VesselTimelineEvent} from '../app';
import {MatIcon} from '@angular/material/icon';
import {DatePipe, NgTemplateOutlet} from '@angular/common';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';

interface TimelineDayGroup {
  key: string;
  date: Date;
  status: VesselStatus;
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
    MatCardTitleGroup
  ],
  templateUrl: './vessel-timeline.component.html',
  styleUrl: './vessel-timeline.component.css',
})
export class VesselTimelineComponent {
  private _events: VesselTimelineEvent[] = [];
  groupedEvents: TimelineDayGroup[] = [];

  @Input() set events(value: VesselTimelineEvent[]) {
    this._events = value;
    this.groupedEvents = this.buildGroups();
  }

  get events(): VesselTimelineEvent[] {
    return this._events;
  }

  @Output() edit = new EventEmitter<VesselTimelineEvent>();
  @Output() remove = new EventEmitter<VesselTimelineEvent>();
  @Output() add = new EventEmitter<void>();

  buildGroups(): TimelineDayGroup[] {
    const map = new Map<string, TimelineDayGroup>();

    for (const event of this.events) {
      const key = event.actualDateTime.toDateString();

      if (!map.has(key)) {
        map.set(key, {
          key,
          date: new Date(event.actualDateTime),
          status: event.status,
          events: []
        });
      }

      map.get(key)!.events.push(event);
    }

    return Array.from(map.values());
  }

  getFlatIndex(groupIndex: number, eventIndex: number): number {
    let index = 0;

    for (let g = 0; g < groupIndex; g++) {
      index += this.groupedEvents[g].events.length;
    }

    return index + eventIndex;
  }

  isRepeatedStatusGlobal(
    groupIndex: number,
    eventIndex: number
  ): boolean {
    // перша подія взагалі
    if (groupIndex === 0 && eventIndex === 0) {
      return false;
    }

    // попередня подія
    if (eventIndex > 0) {
      return (
        this.groupedEvents[groupIndex].events[eventIndex - 1].status ===
        this.groupedEvents[groupIndex].events[eventIndex].status
      );
    }

    // перша подія дня → порівнюємо з останньою з попереднього дня
    const prevGroup = this.groupedEvents[groupIndex - 1];
    const prevEvent = prevGroup.events[prevGroup.events.length - 1];

    return prevEvent.status === this.groupedEvents[groupIndex].events[eventIndex].status;
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
