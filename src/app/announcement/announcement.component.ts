import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  announcements = [
    'Mid-term exams start next Monday.',
    'Project submission deadline extended to 25th July.',
    'New course material uploaded to LMS.',
    'Orientation for new students this Friday at 10am.'
  ];
}
