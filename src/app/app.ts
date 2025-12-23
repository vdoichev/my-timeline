import { Component } from '@angular/core';
import {MaterialTimelineComponent, TimelineItem} from './material-timeline-component/material-timeline-component';

@Component({
  selector: 'app-root',
  imports: [MaterialTimelineComponent],
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

}
