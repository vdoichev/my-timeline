import { Component } from '@angular/core';
import {TimelineItem} from './material-timeline-component/material-timeline-component';
import {VesselTimelineComponent} from './vessel-timeline.component/vessel-timeline.component';

export type VesselStatus = 'arrival' | 'handling' | 'departure';

export interface VesselTimelineEvent {
  id: string;
  actualDateTime: Date;
  description: string;
  status: VesselStatus;
}

@Component({
  selector: 'app-root',
  imports: [VesselTimelineComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  timeline: TimelineItem[] = [
    {
      id: 0,
      title: 'Підхід',
      date: '01.09.2025',
      description: 'Судно пройшло Босфор',
      icon: 'add_circle',
      status: 'success',
    },
    {
      id: 1,
      title: 'Підхід',
      date: '02.09.2025',
      description: 'Судно очікує на Суліні',
      icon: 'add_circle',
      status: 'success',
      isGroupChild: true
    },
    {
      id: 2,
      title: 'Під обробкою',
      date: '02.09.2025',
      description: 'Постановка на причал 25',
      icon: 'hourglass_top',
      status: 'active'
    },
    {
      id: 3,
      title: 'Під обробкою',
      date: '02.09.2025',
      description: 'Перешвартування з причалу 25 на причал 16',
      icon: 'hourglass_top',
      status: 'active',
      isGroupChild: true
    },
    {
      id: 4,
      title: 'Відхід',
      date: '03.09.2025',
      description: 'Заявку виконано',
      icon: 'check_circle',
      status: 'warning'
    }
  ];

  events: VesselTimelineEvent[] = [
    {
      id: '1',
      actualDateTime: new Date('2025-09-01T08:30'),
      description: 'Судно прибуло в порт',
      status: 'arrival'
    },
    {
      id: '2',
      actualDateTime: new Date('2025-09-01T10:00'),
      description: 'Початок вантажних робіт',
      status: 'handling'
    },
    {
      id: '3',
      actualDateTime: new Date('2025-09-02T18:00'),
      description: 'Судно покинуло порт',
      status: 'departure'
    }
  ];

  onAdd() {}
  onEdit(event: VesselTimelineEvent) {}
  onRemove(event: VesselTimelineEvent) {}
}
