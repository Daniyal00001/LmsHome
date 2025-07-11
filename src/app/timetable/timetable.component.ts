import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent {
  // Add this property
  timetable = [
    {
      day: 'Monday',
      date: 'Jul 7',
      expanded: false,
      classes: [
        {
          subject: 'Database Systems',
          type: 'lecture',
          time: '9:00 AM',
          duration: '1h 30m',
          teacher: 'Dr. Ali',
          location: 'CS-101'
        },
        {
          subject: 'Data Structures Lab',
          type: 'lab',
          time: '11:00 AM',
          duration: '2h',
          teacher: 'Ms. Fatima',
          location: 'Lab-3'
        }
      ]
    },
    {
      day: 'Tuesday',
      date: 'Jul 8',
      expanded: false,
      classes: [
        {
          subject: 'Operating Systems',
          type: 'lecture',
          time: '10:00 AM',
          duration: '1h 30m',
          teacher: 'Dr. Ahmed',
          location: 'CS-102'
        }
      ]
    },
    {
      day: 'Wednesday',
      date: 'Jul 9',
      expanded: false,
      classes: []
    },
    {
      day: 'Thursday',
      date: 'Jul 10',
      expanded: true,
      classes: [
        {
          subject: 'Computer Networks',
          type: 'lecture',
          time: '11:00 AM',
          duration: '2h',
          teacher: 'Dr. Brown',
          location: 'CS-103'
        },
        {
          subject: 'Ethics',
          type: 'seminar',
          time: '3:00 PM',
          duration: '1h',
          teacher: 'Dr. Aslam',
          location: 'CS-106'
        }
      ]
    },
    {
      day: 'Friday',
      date: 'Jul 11',
      expanded: false,
      classes: [
        {
          subject: 'Software Engineering Tutorial',
          type: 'tutorial',
          time: '1:00 PM',
          duration: '1h 30m',
          teacher: 'Mr. Usman',
          location: 'CS-104'
        }
      ]
    }
  ];

  toggleDay(day: any): void {
    day.expanded = !day.expanded;
  }
}
