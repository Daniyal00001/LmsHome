import { Component } from '@angular/core';

@Component({
  selector: 'app-currentcourses',
  templateUrl: './currentcourses.component.html',
  styleUrls: ['./currentcourses.component.css']
})
export class CurrentcoursesComponent {
  courses = [
    { name: 'Civics and Community Engagement Sec 8', code: 'CCE-101', teacher: 'Ms. Saman Ferheen' },
    { name: 'Database systems Sec 8', code: 'DBS-201', teacher: 'Ms. Ayesha Razzaq' },
    { name: 'Database systems Sec 8', code: 'DBS-202', teacher: 'Ms. Ayesha Farooq' },
    { name: 'Digital Logic Design Sec 8', code: 'DLD-301', teacher: 'Ms. Naila Noreen' },
    { name: 'Database systems Sec 8', code: 'DBS-203', teacher: 'Ayesha Farooq' }
  ];
  
}
