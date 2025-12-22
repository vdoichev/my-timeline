import { Component, signal } from '@angular/core';
import {MaterialTimelineComponent, TimelineItem} from './material-timeline-component/material-timeline-component';

@Component({
  selector: 'app-root',
  imports: [MaterialTimelineComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-timeline');
  timeline: TimelineItem[] = [
    {
      title: 'Заявку створено',
      date: '01.09.2025',
      description: 'Користувач створив заявку',
      icon: 'add_circle',
      status: 'success'
    },
    {
      title: 'В обробці',
      date: '02.09.2025',
      description: 'Менеджер взяв у роботу',
      icon: 'hourglass_top',
      status: 'active'
    },
    {
      title: 'Завершено',
      date: '03.09.2025',
      description: 'Заявку виконано',
      icon: 'check_circle',
      status: 'warning'
    }
  ];

}
