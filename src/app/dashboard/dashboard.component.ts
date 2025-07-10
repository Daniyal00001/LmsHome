import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Enrolled Semester', subtitle: '', value: '5', icon: 'bi bi-book' },
    { title: 'Outstanding', subtitle: '', value: '5', icon: 'bi bi-check-circle' },
    { title: 'CGPA', subtitle: '', value: '12', icon: 'bi bi-journal-text' },
    { title: 'Credit Hours', subtitle: '', value: '17', icon: 'bi bi-bell' }
  ];
  
}
